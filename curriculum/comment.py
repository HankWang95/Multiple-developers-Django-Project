from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from .models import Comment, Series
from .forms import PostCommentForm
from django.contrib.auth.decorators import login_required


# 发布评论
@login_required
def post_comment_view(request, series):
    if request.method == 'POST':
        form = PostCommentForm(request.POST)
        if form.is_valid():

            body = form.cleaned_data['body']
            author = request.user
            s = Series.objects.get(pk=series)
            post = Comment(body=body, author=author, series=s)
            post.save()

            return redirect('play',series)
        return redirect('play',series)


# 展示评论
# def render_comment_view(request, series):
#     list = []
#     form = PostCommentForm()
#     s = Series.objects.get(pk=series)
#     q = Comment.objects.filter(series=s)
#     for i in q:
#         dict = {}
#         dict['name'] = i.author.username
#         dict['body'] = i.body
#         dict['time'] = i.created_time
#         dict['href'] = ""
#         list.append(dict)
#     return render(request, "curriculum/play.html", {'form':form, 'list':list})