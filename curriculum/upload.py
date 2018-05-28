from django.shortcuts import render, redirect
from .forms import AddCurriculumForm, AddSeriesForm
from .models import Series
from django.contrib.auth.decorators import permission_required
import os
# Create your views here.


UPLOAD_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'upload_dir')
PASSED_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'passed_dir')


# 分块写入文件 return 文件存储的位置
def handle_uploaded_file(f, file_name, series):
    outpath = os.path.join(UPLOAD_DIR, series)
    if not os.path.exists(outpath):  # 判断是否存在文件或目录
        os.makedirs(outpath)
    with open(os.path.join(outpath, file_name), 'wb+') as destination:
        for chunk in f.chunks():
            destination.write(chunk)
    print(outpath)
    return os.path.join(outpath, file_name)


# 检测用户是否有上传文件的权限，如果没有返回主页
@permission_required('curriculum.upload_file', login_url='/')
# 向系列添加视频界面
def add_curriculum_view(request, series):
    series = Series.objects.get(pk=series)
    if series.owner != request.user:
        return redirect('my_series_list')
    if request.method == 'POST':
        form = AddCurriculumForm(request.POST, request.FILES)
        file = request.FILES['post_file']
        # if str(file.content_type) != "video/mp4":
        #     print(str(file.content_type))
        #     return redirect('add_curriculum',series.id)
        if form.is_valid():
            series.checked = False
            series.save()
            new_curriculum = form.save(commit=False)
            new_curriculum.owner = request.user
            new_curriculum.series = series
            new_curriculum.path = handle_uploaded_file(request.FILES['post_file'],
                                                       file_name=form.cleaned_data['name']+".mp4",
                                                       series=series.name)
            if request.FILES['post_attachment'] != "" or request.FILES['post_attachment'] is not None:
                new_curriculum.attachment = handle_uploaded_file(
                    request.FILES['post_attachment'],
                    file_name=request.FILES['post_attachment'].name,
                    series=series.name)
            new_curriculum.save()
            print("saved!")
            return redirect('my_series',series.id)
        print(form)
        return redirect('add_curriculum',series.id)
    else:
        form = AddCurriculumForm()

    return render(request, 'curriculum/add_curriculum.html', {'form': form, 'series': series})


# 添加系列
@permission_required('curriculum.upload_file',login_url='/')
def add_series_view(request):
    if request.method == 'POST':
        form = AddSeriesForm(request.POST)
        if form.is_valid():
            new_series = form.save(commit=False)
            new_series.owner = request.user
            new_series.path = os.path.join(PASSED_DIR, form.cleaned_data['name'])
            if not os.path.exists(new_series.path):  # 判断是否存在文件或目录
                os.makedirs(new_series.path)
            new_series.save()
            return redirect('my_series', new_series.id)
        return redirect('my_series_list')
    else:
        form = AddSeriesForm()
    return render(request, 'curriculum/add_series.html', {'form': form})
