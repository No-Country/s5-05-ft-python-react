from django.contrib import admin
from django.urls import path, include
from main.views import *
from main.auth import *

urlpatterns = [
    path('usuario/', user_api_view, name = 'usuario_api'),
    path('usuario/<int:pk>/', user_detail_view, name= 'user_detail'),
    path('jugador/<int:pk>/', jugador_detail_view, name = 'jugador_detail'),
    path('jugador/', jugador_api_view, name = 'jugador_api'),
    path('complejo/<int:pk>/', complejo_detail_view, name = 'complejo_detail'),
    path('complejo/', complejo_api_view, name = 'complejo_api'),
    path('login/', Login.as_view(), name = 'Login'),
    path('logout/', Logout.as_view(), name = 'Logout')
]
