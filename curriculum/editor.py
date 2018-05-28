from django.shortcuts import render,redirect
from django.contrib.auth.decorators import permission_required

from .models import UnauditedCurriculum, Curriculum, UnPassCurriculum, Series
import os


# 编辑人员 界面
@permission_required('curriculum.editor', login_url='/')
def editor_index_view(request):

        return render(request, 'curriculum/editor/editor.html')


# 需要评判的系列列表
@permission_required('curriculum.editor', login_url='/')
def need_judge_series_view(request):
    series_list = Series.objects.all().filter(checked=False)
    return render(request, 'curriculum/all_series.html', {'editor':True,
                                                          'series_list':series_list})


# 需要评判的课程列表,播放
@permission_required('curriculum.editor', login_url='/')
def need_judge_cur_view(request, series_id):
    s = Series.objects.get(pk=series_id)
    cur_list = UnauditedCurriculum.objects.all().filter(series=s, checked=False)
    if cur_list is None:
        s.checked = True
        s.save()
        return redirect('editor_series_list')
    else:
        return render(request, 'curriculum/editor/editor_play.html', {'series':s,
                                                                        'cur_list':cur_list})


# 评判界面
# def pass_through_view(request, cur_id):
#     cur = UnauditedCurriculum.objects.get(pk=cur_id)


# 评判结果
@permission_required('curriculum.editor', login_url='/')
def determine_view(request, status, cur_id):
    cur = UnauditedCurriculum.objects.get(pk=cur_id)
    if status == 1:
        cur.checked = True
        cur.editor = request.user
        cur.save()

        return redirect('editor_cur_list', cur.series.id)
    else:
        new = UnPassCurriculum(curriculum=cur,editor=request.user)
        new.save()
        return redirect('editor_cur_list', cur.series.id)

