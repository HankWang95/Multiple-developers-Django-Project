from django.shortcuts import render, redirect
from django.contrib.auth.models import Group
from .models import Series



def index_view(request):
    who = ""
    if request.user.is_active:
        try:
            if Group.objects.get(user=request.user).name == 'teachers':
                who = "teachers"
            elif Group.objects.get(user=request.user).name == 'editors':
                who = "editors"
            elif Group.objects.get(user=request.user).name == 'students':
                who = "students"
        except:
            pass
    series_list = Series.objects.all()[:8]
    return render(request, 'home.html', {'who':who,
                                         'series_list': series_list})