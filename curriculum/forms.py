from django import forms
from django.forms import ModelForm
from .models import Series, UnauditedCurriculum


# 上传视频文件表单
class AddCurriculumForm(ModelForm):
    post_file = forms.FileField(label='请上传.mp4视频文件')
    post_attachment = forms.FileField(label='请上传附件', required=False)

    class Meta:
        model = UnauditedCurriculum
        fields = ['name', 'number']




# 添加系列课程表单
class AddSeriesForm(ModelForm):

    class Meta:
        model = Series
        fields = ['name', 'kind', 'introduce', 'tag']

    def clean_tag(self):
        tag = self.cleaned_data['tag']
        if " " in tag:
            tag_list = tag.split()
            tag = '#'.join(tag_list)
            return tag
        else:
            return tag


# 评论表单
class PostCommentForm(forms.Form):
    body = forms.CharField(widget=forms.Textarea,max_length=140,label="输入留言内容")


