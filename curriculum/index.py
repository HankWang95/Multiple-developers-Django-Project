from django.shortcuts import render, redirect
from django.contrib.auth.models import Group



def index_view(request):
    who = ""
    if request.user.is_active:
        try:
            if Group.objects.get(user=request.user).name == 'teachers':
                who = "teachers"
            elif Group.objects.get(user=request.user).name == 'editors':
                who = "editors"
        except:
            pass
    return render(request, 'home.html', {'who':who})