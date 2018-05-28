from .forms import CaseForm
from django.shortcuts import render,redirect
from .models import Problem
import os

CODE_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'test_dir')

def case_add(request, id):
    if request.method == 'POST':

        form = CaseForm(request.POST)

        if form.is_valid():

            input_case = form.cleaned_data['input_case']
            output_case = form.cleaned_data['output_case']
            #number = str(form.cleaned_data['number'])
            #DIR = os.path.join(CODE_DIR, number)
            DIR = os.path.join(CODE_DIR, str(id))
            #with open('dir', 'w+') as f:
                #f.write(DIR)
            if not os.path.isdir(DIR):
                os.makedirs(DIR)

            count = 0
            for fn in os.listdir(DIR):
                count += 1
            count //= 2
            count += 1
            filename = os.path.join(DIR, str(count))
            input_command = "echo '"+input_case+"' > "+filename+".in"
            output_command = "echo '"+output_case+"' > "+filename+".out"
            os.system(input_command)
            os.system(output_command)
            return redirect('problem_show', id)
        else:
            return render(request, 'problem/testcase.html', {'form':form})
    else:
        form = CaseForm()
        return render(request, 'problem/testcase.html', {'form':form})
