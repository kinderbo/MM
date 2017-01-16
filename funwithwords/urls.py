from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^game/$', views.mainview, name='start'),
    url(r'^bonus/$', views.bonus, name='bonus'),

]
