from django.http import HttpResponse
from django.shortcuts import render
from .models import Words, GameModel


def index(request):
    return render(request, 'funwithwords/Interface.html')
    # model = GameModel()
    # message = model.test()
    # return HttpResponse(message)
