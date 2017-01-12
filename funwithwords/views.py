from django.http import HttpResponse
from django.shortcuts import render


def index(request):
    return render(request, 'funwithwords/Interface.html')
    # return HttpResponse("Hello, Cata. This is where we will put our Word Challenge App.")
