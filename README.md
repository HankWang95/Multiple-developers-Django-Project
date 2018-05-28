# git 标准化
- commit -m：（项目功能实现完全后提交）
  - yyyy-mm-dd + update inofo 
  - update info ：增删功能 欲实现功能 
- tag：（里程碑式事件或近段时间不能继续开发时提交）
  - yyyy-mm-dd + details info
  - details info：至今为止所有功能概述 目录概述 url概述
- 回溯：
  - 当出现以下情况的时候考虑回溯
     - 功能被搞乱。需求与实现不符。

# user app

##url
- 注册
- 登陆 登出
- 详细信息 填写/查看

# 播放器界面的实现

## 渲染界面（play）

- 暂时属于静态html，通过调用AJAX对象来向后端要数据

## AJAX播放器（play_ajax_obj）

- 是一个html的对象、生成一个播放器
- 传入一个name参数（在jquery中），生成一个src视频源url

## 文件对象（play_file_obj）

- 传入一个src参数（通过AJAX传入），通过src找文件
- 是一个FileResponse