from django.urls import path
from . import register, index, user_info, log

urlpatterns = [
    path('login/', log.login_view,name='login'),
    path('logout/', log.logout_view, name='logout'),
    path('', index.index_view, name='index'),
    path('register/', register.register_view, name='register'),
    path('teacher/register/', register.teacher_register_view, name='teacher_register'),
    # path('detailed/', ),
    path('user_info/', user_info.user_info_view, name='user_info'),
    path('info_fill/', user_info.info_fill_view, name='info_fill'),
]