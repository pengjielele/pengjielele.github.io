const serve = require('koa-static');
const path = require('path');
const Koa = require('koa');
const cors = require('@koa/cors');
const app = new Koa();

app.use(cors());
app.use(serve(path.resolve(__dirname,'src')));

app.use(async ctx => {
  ctx.body = 'static server';
});

app.listen(3001);

console.log('listening on port 3001');