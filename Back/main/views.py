from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import UserSerializer, JugadorSerializer
from django.http import JsonResponse
from .models import Jugador, User

@api_view(['GET', 'POST'])
def user_api_view(request):
        if request.method == 'GET':    
            users = User.objects.all()
            user_serializer = UserSerializer(users, many = True)
            user_serializer.get_turnos_display()
            return Response(user_serializer.data)


@api_view(['GET', 'POST'])
def jugador_api_view(request):
        if request.method == 'GET':    
            jugador = Jugador.objects.all()
            jugador_serializer = JugadorSerializer(jugador, many = True)
            return Response(jugador_serializer.data)



@api_view(['GET'])
def jugador_detail_view(request, pk):

    if request.method == 'GET':
        if pk is not None:
            jugador = Jugador.objects.filter(id = pk).first()
            jugador_serializer = JugadorSerializer(jugador)
            return Response(jugador_serializer.data)


