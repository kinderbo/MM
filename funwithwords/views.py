from django.http import HttpResponse
from django.shortcuts import render
from .models import Words, GameModel


def index(request):
    return render(request, 'funwithwords/StartView.html')
    # model = GameModel()
    # message = model.test()
    # return HttpResponse(message)

def mainview(request):
    model = GameModel()
    # request.session['model'] = model
    context = {'key': model.curKey, 'three': model.three, 'four': model.four, 'five': model.five, 'six': model.six, 'model':model}
    return render(request, 'funwithwords/Interface.html', context)

def bonus(request):
    return render(request, 'funwithwords/BonusView.html')
