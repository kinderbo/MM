from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, Cata. This is where we will put our Word Challlenge App.")
