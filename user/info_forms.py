from django.forms import ModelForm, forms
from .models import StudentInfo, TeacherInfo


class StudentInfoForm(ModelForm):
    class Meta:
        model = StudentInfo
        fields = ['id_card','real_name','phone_number','education','profession']

    def clean_id_card(self):
        id_card = self.cleaned_data['id_card']
        num_words = len(id_card)
        if num_words != 18 or not id_card[0:17].isdigit():
            raise forms.ValidationError("请输入正确的身份证号码")
        return id_card


class TeacherInfoForm(ModelForm):
    class Meta:
        model = TeacherInfo
        fields = ['id_card','real_name','phone_number','education','profession']

    def clean_id_card(self):
        id_card = self.cleaned_data['id_card']
        num_words = len(id_card)
        if num_words != 18 or not id_card[0:17].isdigit():
            raise forms.ValidationError("请输入正确的身份证号码")
        return id_card