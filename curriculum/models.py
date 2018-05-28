from django.db import models
from django.contrib.auth.models import User
from django.utils.timezone import now


# Create your models here.

# 自定义课程类型（树形结构）
class KindOfSeries(models.Model):
    parent_kind = models.ForeignKey('self', blank=True, null=True,on_delete=models.CASCADE)
    name = models.CharField(max_length=20)

    def __str__(self):
        return self.name


# 所有系列
class Series(models.Model):
    name = models.CharField(max_length=20)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='Series_owner')
    kind = models.ForeignKey(KindOfSeries, on_delete=models.CASCADE, related_name='Series_kind', verbose_name='所属类型')
    number_of_participants = models.IntegerField(default=0, verbose_name='参加课程人数')
    checked = models.BooleanField(default=False)
    introduce = models.CharField(max_length=200, blank=True, null=True, verbose_name='系列简介')
    tag = models.CharField(max_length=50, blank=True, null=True, verbose_name='输入关键字，使用空格分割')
    img = models.FilePathField(blank=True,null=True)
    path = models.FilePathField()


# 用户上传的 所有课程
class UnauditedCurriculum(models.Model):
    created_time = models.DateTimeField(default=now)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='UnauditedCurriculum_owner')
    name = models.CharField(max_length=50, verbose_name='课程名')
    path = models.FilePathField()
    series = models.ForeignKey(Series, on_delete=models.CASCADE, related_name='UnauditedCurriculum_series')
    number = models.IntegerField(verbose_name='集数')
    attachment = models.FilePathField(blank=True, null=True, verbose_name='附件文件')
    checked = models.BooleanField(default=False)
    editor = models.ForeignKey(User, blank=True, null=True, related_name='UnauditedCurriculum_editor',on_delete=models.CASCADE)

    class Meta:
        # permissions 会在数据库创建属于该模块的一个自定义权限
        permissions = (
            ('upload_file', '可以上传文件'),
            ('editor', '审核员权限'),
        )
        ordering = ['number']


# 审核通过课程
class Curriculum(models.Model):
    editor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='Curriculum_editor', blank=True,
                               null=True)
    created_time = models.DateTimeField(default=now)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='Curriculum_owner')
    name = models.CharField(max_length=50, verbose_name='课程名')
    path = models.FilePathField()
    series = models.ForeignKey(Series, on_delete=models.CASCADE, related_name='Curriculum_series')
    number = models.IntegerField(verbose_name='集数')
    attachment = models.FilePathField(blank=True,null=True, verbose_name='附件')
    img = models.FilePathField(blank=True, null=True)


# 评论（按系列）
class Comment(models.Model):
    body = models.TextField('正文', max_length=300)
    created_time = models.DateTimeField('创建时间', default=now)
    author = models.ForeignKey(User, verbose_name='作者', on_delete=models.CASCADE)
    series = models.ForeignKey(Series, on_delete=models.CASCADE,related_name='Comment_series')
    parent_comment = models.ForeignKey('self', verbose_name="上级评论", blank=True, null=True, on_delete=models.CASCADE)
    is_enable = models.BooleanField('是否显示', default=True, blank=False, null=False)

    class Meta:
        ordering = ['-created_time']
        verbose_name = "评论"
        verbose_name_plural = verbose_name
        get_latest_by = 'created_time'

    def __str__(self):
        return self.body

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)


# 学生选课情况
class CurriculumParticipation(models.Model):
    student = models.ForeignKey(User, on_delete=models.CASCADE)
    curriculum = models.IntegerField(default=1)
    series = models.ForeignKey(Series, on_delete=models.CASCADE)


# 审核未通过的视频
class UnPassCurriculum(models.Model):
    curriculum = models.ForeignKey(UnauditedCurriculum, on_delete=models.CASCADE, related_name='UnPassCurriculum_curriculum')
    editor = models.ForeignKey(User, on_delete=models.CASCADE, related_name='UnPassCurriculum_editor')

