from django import forms
from .models import Problem


class ProblemForm(forms.Form):
    number = forms.CharField(label='题目编号')
    name = forms.CharField(label='题目名字')
    tag = forms.CharField(label='题目类型')
    description = forms.CharField(label='题目描述')
    input_description = forms.CharField(label='输入描述')
    output_description = forms.CharField(label='输出描述')
    input_sample = forms.CharField(label='输入样例')
    output_sample = forms.CharField(label='输出样例')
    time = forms.IntegerField(label='时间限制')
    memory = forms.IntegerField(label='内存限制')



class CodeForm(forms.Form):
    code = forms.CharField(widget=forms.Textarea())
    LANGUAGE_CHOICES= (
        ('C', 'c语言'),
        ('C++', 'c++语言'),
        ('JAVA', 'Java'),
        ('Python', 'python'),
    )
    lang_choice = forms.ChoiceField(label='语言选择', choices=LANGUAGE_CHOICES)

class CaseForm(forms.Form):
    input_case = forms.CharField(widget=forms.Textarea())
    output_case = forms.CharField(widget=forms.Textarea())
    #number = forms.IntegerField()
