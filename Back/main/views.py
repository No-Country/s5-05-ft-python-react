from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializer import UserSerializer, JugadorSerializer, ComplejoSerializer
from .models import Jugador, User, Complejo
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken   

@api_view(['GET','PATCH'])
def user_detail_view(request,pk=None):
    user = User.objects.filter(id = pk).first()
    if user:
        if request.method == 'GET':
            user_serializer = UserSerializer(user)
            print(user_serializer.data)
            return Response(user_serializer.data)

        elif request.method == 'PATCH':
            if user.id == request.user.id or request.user.is_superuser:
                user_serializer = UserSerializer(instance=user, data=request.data, partial = True)
                if user_serializer.is_valid():
                    user_serializer.save()
                    return Response(user_serializer.data, status=status.HTTP_200_OK)
                return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response({"message":"No estas acreditado para actualizar estos datos"}, status=status.HTTP_403_FORBIDDEN)
        return Response({"message":"No se ha encontrado un usuario con estos datos"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'POST'])
def user_api_view(request):
    
        if request.method == 'GET':    
            users = User.objects.all()
            user_serializer = UserSerializer(users, many = True)
            return Response(user_serializer.data, status=status.HTTP_200_OK)

        elif request.method == 'POST':    
            user_serializer = UserSerializer(data = request.data)
            if user_serializer.is_valid():
                user_serializer.save()
                return Response(user_serializer.data, status = status.HTTP_201_CREATED)
            return Response(user_serializer.errors, status = status.HTTP_303_SEE_OTHER)


@api_view(['GET', 'PATCH'])
def user_detail_view(request,pk=None):
    user = User.objects.filter(id = pk).first()
    if user:          
        if request.method == 'GET':
            user_serializer = UserSerializer(user)
            return Response(user_serializer.data)

    
        elif request.method == 'PATCH':
            if user.id == request.user.id or request.user.is_superuser:
                user_serializer = UserSerializer(instance=user, data=request.data, partial = True)
                if user_serializer.is_valid():
                    user_serializer.save()
                    return Response(user_serializer.data, status=status.HTTP_200_OK)
                return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response({"message":"No estas acreditado para actualizar estos datos"}, status=status.HTTP_403_FORBIDDEN)
        return Response({"message":"No se ha encontrado un usuario con estos datos"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def jugador_api_view(request):
        if request.method == 'GET':    
            jugador = Jugador.objects.all()
            jugador_serializer = JugadorSerializer(jugador, many = True)
            return Response(jugador_serializer.data, status=status.HTTP_200_OK)

@api_view(['GET','PUT'])
def jugador_detail_view(request,pk=None):
    # query
    jugador = Jugador.objects.filter(usuario_id = pk).first()

    # validation
    if jugador:

        # retrieve            
        if request.method == 'GET':
            jugador_serializer = JugadorSerializer(jugador)
            return Response(jugador_serializer.data, status=status.HTTP_200_OK)

        # update    
        elif request.method == 'PUT':
            if jugador.usuario_id == request.user.id or request.user.is_superuser:
                jugador_serializer = JugadorSerializer(instance=jugador, data=request.data)
                if jugador_serializer.is_valid():
                    jugador_serializer.save()
                    return Response(jugador_serializer.data, status=status.HTTP_200_OK)
                return Response(jugador_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response({"message":"No estas acreditado para actualizar estos datos"}, status=status.HTTP_403_FORBIDDEN)
    return Response({"message":"No se ha encontrado un jugador con estos datos"}, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
def complejo_api_view(request):
        if request.method == 'GET':    
            complejo = Complejo.objects.all()
            complejo_serializer = ComplejoSerializer(complejo, many = True)
            return Response(complejo_serializer.data, status=status.HTTP_200_OK)

@api_view(['GET','PUT'])
def complejo_detail_view(request,pk=None):
    # query
    complejo = Complejo.objects.filter(usuario_id = pk).first()
    
    # validation
    if complejo:
        
        # retrieve
        if request.method == 'GET':
            complejo_serializer = ComplejoSerializer(complejo)
            return Response(complejo_serializer.data, status=status.HTTP_200_OK)

        # update
        elif request.method == 'PUT':
            if complejo.usuario_id == request.user.id or request.user.is_superuser:
                complejo_serializer = ComplejoSerializer(instance=complejo, data=request.data)
                if complejo_serializer.is_valid():
                    complejo_serializer.save()
                    return Response(complejo_serializer.data, status=status.HTTP_200_OK)
                return Response(complejo_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            return Response({"message":"No estas acreditado para actualizar estos datos"}, status=status.HTTP_403_FORBIDDEN)
    return Response({"message":"No se ha encontrado un complejo con estos datos"}, status=status.HTTP_400_BAD_REQUEST)
