from django.shortcuts import render, redirect
from django.contrib.auth.models import Group
from .info_forms import StudentInfoForm, TeacherInfoForm
from .models import StudentInfo, TeacherInfo


# 用户的个人信息展示界面
def user_info_view(request):
    if Group.objects.get(user=request.user).name == 'students':
        try:
            user_info = StudentInfo.objects.all().filter(user=request.user)[0]
        except:
            return redirect('info_fill')
    else:
        try:
            user_info = TeacherInfo.objects.all().filter(user=request.user)[0]
        except:
            return redirect('info_fill')

    return render(request, 'user/user_info.html', {'user_info':user_info})


# 用户的详细信息填写界面
def info_fill_view(request):
    if request.method == 'POST':
        if Group.objects.get(user=request.user).name == 'teachers':
            form = TeacherInfoForm(request.POST)
        else:
            form = StudentInfoForm(request.POST)
        if form.is_valid():
            new = form.save(commit=False)
            new.user = request.user
            new.save()
            return redirect('/')
        else:
            return redirect('info_fill')
    else:
        if Group.objects.get(user=request.user).name == 'teachers':
            form = TeacherInfoForm()
        else:
            form = StudentInfoForm()
        return render(request, 'user/info_fill.html', {'form':form})