from django.contrib.auth.models import Group
from .models import Series, KindOfSeries, Curriculum, CurriculumParticipation
from django.shortcuts import render, redirect


# 展示所有series
def show_all_series_view(request):
    series_list = Series.objects.all() # .filter(approval_status=True)
    kind_list = KindOfSeries.objects.all()
    return render(request, 'curriculum/all_series.html', {'series_list': series_list,
                                                          'kind_list': kind_list})


# 展示series的信息，可以加入学习或进入学习
def show_series_view(request, series):
    s = Series.objects.get(pk=series)
    joined = False
    try:
        series_list = CurriculumParticipation.objects.all().filter(student=request.user)
        for i in series_list:
            if s == i.series:
                joined = True

    except:
        joined = False
    return render(request, 'curriculum/show_series.html', {
        'series': s, 'joined': joined
    })


# 通过类别展示series
def search_series_for_kind_view(request, kind):
    kind = KindOfSeries.objects.get(pk=kind)
    kind_list = KindOfSeries.objects.all()
    series_list = Series.objects.all().filter(kind=kind)
    return render(request,'curriculum/all_series.html', {'series_list': series_list,
                                                          'kind_list': kind_list, })

def search_series_for_teacher_view(request, teacher):
    pass