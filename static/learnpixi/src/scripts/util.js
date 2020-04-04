// 获取两点的角度
function rotateToPoint(mx, my, px, py){ 
  var dist_Y = my - py;
  var dist_X = mx - px;
  var angle = Math.atan2(dist_Y,dist_X);
  return angle;
}

// 获取两个数之间的随机数
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 绘制虚线
function drawDash(x0, y0, x1, y1, linewidth) {
  var dashed = new PIXI.Graphics();
  dashed.lineStyle(1, 0x59e3e8, 1); // linewidth,color,alpha
  dashed.moveTo(0, 0);
  dashed.lineTo(linewidth, 0);
  dashed.moveTo(linewidth * 1.5, 0);
  dashed.lineTo(linewidth * 2.5, 0);
  var dashedtexture = dashed.generateCanvasTexture(1, 1);
  var linelength = Math.pow(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2), 0.5);
  var tilingSprite = new PIXI.extras.TilingSprite(dashedtexture, linelength, linewidth);
  tilingSprite.x = x0;
  tilingSprite.y = y0;
  tilingSprite.rotation = angle(x0, y0, x1, y1) * Math.PI / 180;
  tilingSprite.pivot.set(linewidth / 2, linewidth / 2);
  return tilingSprite;
  function angle(x0, y0, x1, y1) {
    var diff_x = Math.abs(x1 - x0),
    diff_y = Math.abs(y1 - y0);
    var cita;
    if (x1 > x0) {
      if (y1 > y0) {
        cita = 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
      } else {
        if (y1 < y0) {
          cita = -360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
        } else {
          cita = 0;
        }
      }
    } else {
      if (x1 < x0) {
        if (y1 > y0) {
          cita = 180 - 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
        } else {
          if (y1 < y0) {
            cita = 180 + 360 * Math.atan(diff_y / diff_x) / (2 * Math.PI);
          } else {
            cita = 180;
          }
        }
      } else {
        if (y1 > y0) {
          cita = 90;
        } else {
          if (y1 < y0) {
            cita = -90;
          } else {
            cita = 0;
          }
        }
      }
    }
    return cita;
  }
}

// 绘制虚线矩形
function drawRect(x,y,width,height,linewidth){
  var rect = new PIXI.Container();

  var top = drawDash(x,y,x+width,y,linewidth); //top border
  var bottom = drawDash(x,y+height,x+width,y+height,linewidth);//bottom border
  var left = drawDash(x,y,x,y+height,linewidth); //left border
  var right = drawDash(x+width,y,x+width,y+height,linewidth); //right border

  rect.addChild(top);
  rect.addChild(bottom);
  rect.addChild(left);
  rect.addChild(right);

  return rect;
}

function onDragStart(event) {
  event.stopPropagation();
  this.data = event.data;
  this.dragging = true;
}

function onDragEnd() {
  this.alpha = 1;
  this.dragging = false;
  this.data = null;
}

function onDragMove(){
  if (this.dragging) {
    var newPosition = this.data.getLocalPosition(this.parent);
    var rotation = rotateToPoint(newPosition.x, newPosition.y, this.position.x, this.position.y);
    this.rotation = rotation
  }
}

function onObjectDragStart(event){
  this.data = event.data;
  // this.alpha = 0.5;
  this.dragging = true;
  clearRects();
  //显示虚线矩形框
  this.children[0].visible = true
  activeContainer = this;
}

function onObjectDragMove(){
  if (this.dragging) {
    var newPosition = this.data.getLocalPosition(this.parent);
    this.x = newPosition.x;
    this.y = newPosition.y;
  }
}