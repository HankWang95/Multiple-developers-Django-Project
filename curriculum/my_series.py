from django.contrib.auth.models import Group
from .models import Series, CurriculumParticipation, Curriculum, UnauditedCurriculum
# TODO: 加入审核后换 Curriculum库
from django.shortcuts import render, redirect


# 我（参与）的系列课程列表 ： 老师与同学渲染不同界面
def my_series_list_view(request):
    if Group.objects.get(user=request.user).name == 'teachers':
        add = True
        list = Series.objects.all().filter(owner=request.user)

    else:
        add = False
        q = CurriculumParticipation.objects.all().filter(student=request.user)
        list = []
        for i in q:
            list.append(i.series)
    return render(request, 'curriculum/my_series_list.html', {'list': list, 'add': add})


# 系列展示页面 老师用户:向属于自己的系列中添加视频
def my_series_view(request, series):
    if Group.objects.get(user=request.user).name == 'teachers':
        series = Series.objects.get(id=series)
        if series.owner != request.user:
            return redirect('my_series_list')
        else:
            curriculum_list = UnauditedCurriculum.objects.all().filter(series=series)
            return render(request, 'curriculum/my_series.html', {'list': curriculum_list, 'add': True, 'series': series})
    else:
        # series = Series.objects.get(pk=series)
        have_series = CurriculumParticipation.objects.all().filter(series=series, student=request.user)
        if have_series is not None:
            series = Series.objects.get(pk=series)
            # TODO: 加入审核后换为Curriculum库
            curriculum_list = Curriculum.objects.all().filter(series=series)
        else:
            return redirect('my_series_list')
        return render(request, 'curriculum/my_series.html', {'list': curriculum_list, 'add': False, 'series':series})


# 参加 series
def join_series_view(request, series):
    if Group.objects.get(user=request.user).name == 'teachers':
        return redirect('/')
    user = request.user
    series = Series.objects.get(pk=series)
    if series is not None:
        new = CurriculumParticipation(student=user, series=series)
        new.save()
        series.number_of_participants = series.number_of_participants + 1
        series.save()
        return redirect('my_series',series.id)
    else:
        return redirect('my_series_list')


# "我的" 渲染界面
def mine_view(request):
    who = ""
    if Group.objects.get(user=request.user).name == 'teachers':
        who = "teachers"
    elif Group.objects.get(user=request.user).name == 'editors':
        who = "editors"
    return render(request, 'curriculum/mine.html',{'who': who})