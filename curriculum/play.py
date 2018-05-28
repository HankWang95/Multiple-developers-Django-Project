from django.shortcuts import render
from django.http import FileResponse
from .forms import PostCommentForm
from .models import Curriculum, UnauditedCurriculum, Series, Comment
import os

# 暂时的测试播放文件夹，迁移时要注意更改
PLAY_PATH = '/Users/wanghc/Desktop/dev-2.0/mysite/curriculum/upload_dir'


# AJAX对象，用来返回一个播放器对象，具体的视频文件需要继续调用其他url
# 参数：name：用来生成一个src（视频源url），传给play_file_obj（src）
def play_ajax_obj(request, id):
    return render(request, 'curriculum/play_ajax_obj.html', {
        'id': id,
    })


# 学生用户视频文件src
def play_file_obj(request, id):
    try:
        cur = Curriculum.objects.get(pk=id)
        path = cur.path
    except:
        return None
    src = os.path.join(path, 'mp4_path/240p.mp4')
    response = FileResponse(open(src, 'rb'), content_type='video/mp4')
    return response


# 用来返回一个文件对象，用来填充视频内容
def editor_play_file_obj(request, id):
    try:
        cur = UnauditedCurriculum.objects.get(pk=id)
        path = cur.path
    except:
        return None
    src = path
    response = FileResponse(open(src, 'rb'), content_type='video/mp4')
    return response


def editor_play_ajax_obj(request, id):

    return render(request, 'curriculum/editor/play_ajax_obj.html', {
        'id': id,
    })


def play_view(request, series):
    s = Series.objects.get(pk=series)
    cur_list = Curriculum.objects.all().filter(series=s)
    comment_list = []
    comment_form = PostCommentForm()
    s = Series.objects.get(pk=series)
    q = Comment.objects.filter(series=s)
    for i in q:
        dict = {}
        dict['name'] = i.author.username
        dict['body'] = i.body
        dict['time'] = i.created_time
        dict['href'] = ""
        comment_list.append(dict)
    return render(request, 'curriculum/play.html', {'cur_list': cur_list,
                                                    'comment_form': comment_form,
                                                    'comment_list': comment_list,
                                                    'series_id': s.id})
