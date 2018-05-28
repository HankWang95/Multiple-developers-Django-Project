from django.shortcuts import render, redirect
from django.contrib import auth
from .forms import LoginForm
from django.contrib.auth import login, authenticate


# 登陆
def login_view(request):
    if request.method == 'POST':
        loginform = LoginForm(request.POST)
        if loginform.is_valid():
            user = authenticate(username=loginform.cleaned_data['username'], password=loginform.cleaned_data['password'])
            if user is not None:
                login(request, user)
                return redirect('/')
            else:
                loginform = LoginForm()
                return render(request, 'user/login.html', {'form': loginform})
        else:
            loginform = LoginForm()
            return render(request, 'user/login.html', {'form': loginform})
    else:
        loginform = LoginForm()
        return render(request, 'user/login.html', {'form':loginform})


# 登出
def logout_view(req):
    # 清理cookie里保存username
    auth.logout(req)
    return redirect('/')