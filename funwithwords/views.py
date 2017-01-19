from django.http import HttpResponse
from django.shortcuts import render
from .models import Words, GameModel
import json


def index(request):
    return render(request, 'funwithwords/StartView.html')
    # model = GameModel()
    # message = model.test()
    # return HttpResponse(message)

def mainview(request):
    model = GameModel()
    # request.session['model'] = model
    three = json.dumps(model.three)
    four = json.dumps(model.four)
    five = json.dumps(model.five)
    six = json.dumps(model.six)
    context = {'key': model.curKey, 'three': three, 'four': four, 'five': five, 'six': six, 'model': model}
    return render(request, 'funwithwords/Interface.html', context)

def bonus(request):
    return render(request, 'funwithwords/BonusView.html')
