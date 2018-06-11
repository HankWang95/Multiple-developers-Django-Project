#coding:utf-8
from django.shortcuts import render,redirect
from django.contrib.auth.models import Group
from django.urls import reverse
from .forms import ProblemForm, CodeForm
from .models import Problem
from curriculum.models import Series,CurriculumParticipation
import os
import json
from django.contrib.auth.decorators import login_required

CODE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'test_dir')


# 题目列表
@login_required
def problem_list(request,series):
    problem_list = Problem.objects.all().filter(series=series)
    add = False
    user = request.user

    joined_number = len(CurriculumParticipation.objects.all().filter(series=series))
    current_series = Series.objects.get(pk=series)
    joined = False
    try:
        series_list = CurriculumParticipation.objects.all().filter(student=request.user)
        for i in series_list:
            if current_series == i.series:
                joined = True

    except:
        joined = False



    if Group.objects.get(user=user).name == 'teachers':
        add = True
    '''listt = []
    for obj in problem_list:
        if obj.series not in list:
            list.append(obj.series)'''
    return render(request, 'problem/problem_list.html', {'list':problem_list,
                                                         'add': add,
                                                         'joined':joined,
                                                         'joined_number':joined_number,
                                                         'series': current_series})


# 题目信息展示
def problem_show(request, id):
    problem = Problem.objects.get(id=id)
    add = False
    if problem.owner == request.user:
        add = True
    return render(request, 'problem/problem_show.html', {'problem':problem, 'add': add})

def code_judge(request, id):
    if request.method == 'POST':

        form = CodeForm(request.POST)
        if form.is_valid():
            code = form.cleaned_data['code']
            language_choice  = form.cleaned_data['lang_choice']
            language_dict = {
                'C': 'c',
                'C++': 'cpp',
                'JAVA': 'java',
                'Python': 'py'}                
            language = 'test.'+language_dict.get(language_choice)

            DIR = os.path.join(CODE_DIR, str(id))
            count = 0
            for fn in os.listdir(DIR):
                count += 1
            count //=2
            filename = os.path.join(DIR, language)
            with open(filename, 'w+') as f:
                f.write(code)

            command = 'ljudge --user-code '+filename
            i = 1
            while(i <= count):
                inputcase = os.path.join(DIR, (str(i)+'.in'))
                outputcase = os.path.join(DIR, (str(i)+'.out'))
                command = command + ' --testcase --input '+inputcase+' --output '+outputcase
                i += 1
            #command = 'ljudge --user-code test.cpp --testcase --input 1.in --output 1.out --testcase --input 2.in --output 2.out' 
            jsonresult = os.popen(command).read()
            result = json.loads(jsonresult)
            with open('result','w+') as f:
                f.write(str(result))
            os.unlink(filename)
            if not result['compilation']['success']:
                compile_error = result['compilation']['log'].splitlines()
                flag = 'COMPILE_ERROR'
                return render(request, 'problem/judgeResult.html', {'list':compile_error, 'flag':flag})
            for i in result['testcases']:
                if 'WRONG_ANSWER' in i['result']:
                    flag = 'WRONG_ANSWER'
                    return render(request, 'problem/judgeResult.html', {'flag':flag})
            for i in result['testcases']:
                if 'TIME_LIMIT_EXCEEDED' in i['result']:
                    flag = 'TIME_LIMIT_EXCEEDED'
                    return render(request, 'problem/judgeResult.html', {'flag':flag})
                if 'MEMORY_LIMIT_EXCEEDED' in i['result']:
                    flag = 'MEMORY_LIMIT_EXCEEDED'
                    return render(request, 'problem/judgeResult.html', {'flag':flag})
            flag = 'ACCEPTED'
            return render(request, 'problem/judgeResult.html', {'flag':flag})
        else:
            return render(request, 'problem/commit.html', {'form': form})
    else:
        form = CodeForm()
        return render(request, 'problem/commit.html', {'form': form, 'id':id})
