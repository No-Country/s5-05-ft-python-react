from datetime import datetime
from django.contrib.sessions.models import Session
from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from .serializer import UserTokenSerializer
from rest_framework.response import Response
from rest_framework.views import APIView

class Login(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        login_serializer = self.get_serializer(data = request.data, context = {'request': request})
        if login_serializer.is_valid(raise_exception = True):
            user = login_serializer.validated_data['user']
            if user.is_active:
                token, created = Token.objects.get_or_create(user=user)
                user_serializer = UserTokenSerializer(user)
                if created:
                    return Response({
                                    'token':token.key, 
                                    'user': user_serializer.data,
                                    'message': 'Inicio de sesion exitoso'
                                    }, status = status.HTTP_201_CREATED)
                else:
                    all_sessions = Session.objects.filter(expire_date__gte = datetime.now())
                    if all_sessions.exists():
                        for session in all_sessions:
                            session_data = session.get_decoded()
                            if user.id == int(session_data.get('_auth_user_id')):
                                session.delete()
                    token.delete()
                    token = Token.objects.create(user = user)
                    return Response({
                                    'token':token.key, 
                                    'user': user_serializer.data,
                                    'message': 'Inicio de sesion exitoso'
                                    }, status = status.HTTP_201_CREATED)
            else:
                return Response({'error': 'No se puede iniciar sesion'},
                                        status = status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'error': 'Nombre de usuario o contrasñea incorrecta'},
                                    status = status.HTTP_400_BAD_REQUEST)
            
        
class Logout(APIView):
    
    def get(self, request, *args, **kwargs):
        
        try:
            token = request.GET.get('token')
            token = Token.objects.filter(key = token).first()
            if token:
                user = token.user
                all_sessions = Session.objects.filter(expire_date__gte = datetime.now())
                if all_sessions.exists():
                    for session in all_sessions:
                        session_data = session.get_decoded()
                        if user.id == int(session_data.get('_auth_user_id')):
                            session.delete()
                session_message = 'Sesiones de usuario eliminadas'
                token_message = 'Token eliminado'
                token.delete()
                return Response({'token_message': token_message, 'session_message': session_message},
                                                 status = status.HTTP_200_OK)
            return Response({'error': 'No se ha encontrado un usuario con estas credenciales'},
                                    status = status.HTTP_400_BAD_REQUEST)
        except:
            return Response({'error': 'No se ha encontrado token en la peticion'},
                                    status = status.HTTP_409_CONFLICT)

                    