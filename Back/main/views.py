from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import UserSerializer, JugadorSerializer
from .models import Jugador, User

@api_view(['GET', 'POST'])
def user_api_view(request):
        if request.method == 'GET':    
            users = User.objects.all()
            user_serializer = UserSerializer(users, many = True)
            return Response(user_serializer.data)

        elif request.method == 'POST':    
            user_serializer = UserSerializer(data = request.data)
            if user_serializer.is_valid():
                user_serializer.save()
                return Response(user_serializer.data)
            return Response(user_serializer.errors)

@api_view(['GET'])
def jugador_api_view(request):
        if request.method == 'GET':    
            jugador = Jugador.objects.all()
            jugador_serializer = JugadorSerializer(jugador, many = True)
            return Response(jugador_serializer.data)

@api_view(['GET','PUT'])
def jugador_detail_view(request,pk=None):

    if request.method == 'GET':
        jugador = Jugador.objects.filter(id = pk).first()
        jugador_serializer = JugadorSerializer(jugador)
        return Response(jugador_serializer.data)

    elif request.method == 'PUT':
        jugador = Jugador.objects.filter(id = pk).first()
        jugador_serializer = JugadorSerializer(instance=jugador, data=request.data)
        if jugador_serializer.is_valid():
            jugador_serializer.save()
            return Response(jugador_serializer.data)
        return Response(jugador_serializer.errors)


