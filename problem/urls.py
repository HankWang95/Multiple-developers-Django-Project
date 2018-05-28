from django.urls import path, include
from . import judge, add, case, delete 

# Create your views here.

urlpatterns = [

    path('commit/<int:id>', judge.code_judge, name='commit'),
    path('add_problem/<int:series>', add.problem_add, name='add_problem'),
    path('add_case/<int:id>', case.case_add, name='add_case'),
    path('problem_list/<int:series>', judge.problem_list, name='problem_list'),
    path('problem_show/<int:id>', judge.problem_show, name='problem_show'),
    path('problem_delete/<int:id>', delete.problem_delete, name='problem_delete'),
]
