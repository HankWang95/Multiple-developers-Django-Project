<<<<<<< HEAD
# Generated by Django 2.0.4 on 2018-05-29 06:06
=======
# Generated by Django 2.0.2 on 2018-05-29 06:00
>>>>>>> 071f56111497fb3ab2440e3f3073a66750b6ff5b

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='EditorsInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=10)),
                ('phone_number', models.CharField(blank=True, max_length=11)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='editors_info', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='StudentInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_card', models.CharField(blank=True, max_length=18)),
                ('real_name', models.CharField(blank=True, max_length=10)),
                ('phone_number', models.CharField(blank=True, max_length=11)),
                ('education', models.CharField(choices=[('university', '大学生'), ('senior', '中学生'), ('junior', '小学生')], default='university', max_length=10)),
                ('profession', models.CharField(blank=True, max_length=10)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='student_info', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'permissions': (('set_active', '更改用户成为不活跃状态'),),
            },
        ),
        migrations.CreateModel(
            name='TeacherInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('id_card', models.CharField(blank=True, max_length=18)),
                ('real_name', models.CharField(blank=True, max_length=10)),
                ('phone_number', models.CharField(blank=True, max_length=11)),
                ('education', models.CharField(choices=[('university', '本科'), ('postgraduate', '研究生'), ('doctor', '博士')], default='university', max_length=10)),
                ('profession', models.CharField(blank=True, max_length=10)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='teacher_info', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
