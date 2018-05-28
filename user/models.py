from django.db import models
from django.contrib.auth.models import User
# Create your models here.


# 用户详细信息模型
class StudentInfo(models.Model):
    EDUCATION_CHOICES = (
        ('university', '大学生'),
        ('senior', '中学生'),
        ('junior', '小学生'),
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='student_info')
    id_card = models.CharField(max_length=18,blank=True)
    real_name = models.CharField(max_length=10,blank=True)
    phone_number = models.CharField(max_length=11,blank=True)
    education = models.CharField(
        max_length=10,
        choices=EDUCATION_CHOICES,
        default='university'
    )
    profession = models.CharField(max_length=10,blank=True)

    class Meta:
        permissions = (
            ('set_active', '更改用户成为不活跃状态'),
        )


class TeacherInfo(models.Model):
    EDUCATION_CHOICES= (
        ('university', '本科'),
        ('postgraduate', '研究生'),
        ('doctor','博士')
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='teacher_info')
    id_card = models.CharField(max_length=18,blank=True)
    real_name = models.CharField(max_length=10,blank=True)
    phone_number = models.CharField(max_length=11,blank=True)
    education = models.CharField(
        max_length=10,
        choices=EDUCATION_CHOICES,
        default='university'
    )
    profession = models.CharField(max_length=10,blank=True)


class EditorsInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='editors_info')
    name = models.CharField(max_length=10,blank=True)
    phone_number = models.CharField(max_length=11,blank=True)