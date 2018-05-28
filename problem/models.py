from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Problem(models.Model):
    number = models.IntegerField(verbose_name='题目编号')
    series = models.IntegerField(verbose_name='series_id')
    name = models.CharField(verbose_name='题目名字', max_length=50)
    tag = models.CharField(verbose_name='题目类型', max_length=50, blank=True)
    description = models.CharField(verbose_name='题目描述', max_length=500) 
    input_description = models.CharField(verbose_name='输入描述', max_length=100)
    output_description = models.CharField(verbose_name='输出描述', max_length=100)
    input_sample = models.CharField(verbose_name='输入样例', max_length=100)
    output_sample = models.CharField(verbose_name='输出样例', max_length=100)
    time = models.IntegerField(verbose_name='时间限制')
    memory = models.IntegerField(verbose_name='内存限制')
    owner = models.ForeignKey(User, related_name='problem_owner', on_delete=models.CASCADE)
