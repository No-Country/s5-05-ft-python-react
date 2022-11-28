from django.contrib import admin
from django.urls import path, include
from main.views import *


urlpatterns = [
    path('usuario/', user_api_view, name = 'usuario_api'),
    path('jugador/<int:pk>/', jugador_detail_view, name = 'jugador_detail'),
    path('jugador/', jugador_api_view, name = 'jugador_api'),
    path('', Login.as_view(), name = 'Login')
]
