from .models import UnauditedCurriculum, Curriculum, Series
from .ffmpeg import handler
from django.http import HttpResponse

import os


# 生成待处理视频列表
def make_pending_video_list():
    cur_list = Curriculum.objects.all()
    un_cur_list = UnauditedCurriculum.objects.all().filter(checked=True)

    cur_id_list = []
    un_cur_id_list = []
    pending_cur_id_list = []
    # 把合格视频id 和 已经过检视频 id 提取出来，进行对比
    for cur in cur_list:
        cur_id_list.append(cur.id)
    for cur in un_cur_list:
        un_cur_id_list.append(cur.id)

    # 把 过审的视频id 和可以播放的视频id 进行对比，如果不在可以播放，加入列表
    for cur_id in un_cur_id_list:
        if cur_id in cur_id_list:
            continue
        else:
            pending_cur_id_list.append(cur_id)

    return pending_cur_id_list


# 生成待处理视频路径
def make_pending_video_path(pending_cur_id_list):
    path_list = []
    for cur_id in pending_cur_id_list:
        cur = UnauditedCurriculum.objects.get(pk=cur_id)
        series = cur.series
        outpath = os.path.join(series.path, cur.name)
        if not os.path.exists(outpath):  # 判断是否存在文件或目录
            os.makedirs(outpath)
        path = (cur.path, outpath, cur_id)
        path_list.append(path)
    print(path_list)
    return path_list


# 执行视频处理，并将新视频存入数据库,暂时使用url控制，将来可以实现自动化
def handle_video(request):
    video_list = make_pending_video_list()
    path_list = make_pending_video_path(video_list)

    for in_path, out_path, cur_id in path_list:
        #handler(in_path, out_path)
        save_new_cur(cur_id, out_path)

    return HttpResponse("ok")


# 将新cur存入数据库
def save_new_cur(cur_id, out_path):
    cur = UnauditedCurriculum.objects.get(pk=cur_id)
    new_cur = Curriculum(
        name=cur.name,
        owner=cur.owner,
        series=cur.series,
        number=cur.number,
        attachment=cur.attachment,
        editor=cur.editor,
        created_time=cur.created_time,
        path=out_path,
        img=os.path.join(out_path,'screenshots/shots.jpg')

    )
    new_cur.save()
    print(new_cur)
