from django.shortcuts import redirect
from .models import Problem


def problem_delete(request, id):
    problem = Problem.objects.get(id = id)
    series = problem.series
    problem.delete()
    return redirect('problem_list',series)
