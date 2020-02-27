export const list = [
  {
    id: 1,
    title: "配置用户名和邮箱",
    content: `
## 配置全局用户名和邮箱
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com

## 配置局部用户名和邮箱
$ git config --local user.name "John Doe"
$ git config --local user.email johndoe@example.com

## 查看配置信息
$ git config user.name
$ git config user.email
`
  },
  {
    id: 2,
    title: "分支操作",
    content: `
## 新建分支（新建名为develop的分支）
$ git checkout -b develop
or
$ git branch develop
$ git checkout develop

## 切换分支（切换到master分支）
$ git checkout master

## 合并分支（合并develop分支）
$ git checkout master
$ git merge develop

## 删除本地分支
$ git branch -d develop

## 查看本地分支
$ git branch

## 查看所有已合并到当前分支的分支
$ git branch --merged

## 查看所有包含未合并工作的分支
$ git branch --no-merged

## 强制删除分支
$ git branch -D develop

## 拉取远程分支
$ git fetch origin master

## 推送到远程分支
$ git push origin master

## 查看远程分支
$ git branch -r

## 删除远程分支
$ git push origin --delete
`
  },
  {
    id: 3,
    title: "标签操作",
    content: `
## 列出标签
$ git tag

## 查找标签
$ git tag -l 'v1.8.5*'

## 创建标签（附注标签）
$ git tag -a v1.0 -m 'version 1.0'

## 创建标签（轻量标签）
$ git tag v1.4

## 查看标签信息
$ git show v1.4

## 补打标签
$ git log --pretty-online
$ git tag -a v1.2 964f16d

## 推送标签
$ git push origin [tagname]

## 推送所有标签
$ git push origin --tags

## 删除本地仓库标签
$ git tag -d v1.4

## 更新远程仓库标签
$ git push origin :refs/tags/v1.4
`
  },
  {
    id: 4,
    title: "撤销代码",
    content: `
## 丢弃工作区的修改(就是让这个文件回到最近一次git commit或git add时的状态)
$ git checkout -- readme.txt 

## 把暂存区的修改撤销掉
$ git reset HEAD reaeme.txt

## 回退版本
$ git reset --hard HEAD^  # 回退到上一个版本   
$ git reset --hard HEAD^^    # 回退到上上一个版本
$ git reset --hard HEAD~2    # 回退到上两个版本
$ git reset --hard b39ef...# 回退到指定版本

`
  },
  {
    id: 4,
    title: "查看版本历史",
    content: `
## 查看版本历史：
$ git log

## 查看简洁版本历史：
$ git log --pretty=oneline

## 查看git每一次命令：
$ git reflog
`
  }
];
