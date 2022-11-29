from rest_framework import status
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from .serializer import UserTokenSerializer
from rest_framework.response import Response
from django.contrib.auth import authenticate

class Login(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        # email = request.data.get('email', '')
        # password = request.data.get('password', '')
        # user = authenticate(
        #     email=email,
        #     password=password
        # )
        serializer = self.serializer_class(data = request.data, context = {
                                                            'request': request
        })
        serializer.is_valid(raise_exception = True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token':token.key})
        # else:
        #     token.delete()
        #     token = Token.objects.create(user = user)
        #     return Response({'token':token.key})
        
        #     user = login_serializer.validated_data['user']
        #     if user.is_active:
        #         token,created = Token.objects.get_or_create(user = user)
        #         user_serializer =  UserTokenSerializer(user)
        #         if created:
        #             return Response({
        #                 'token': token.key,
        #                 'user': user_serializer.data,
        #                 'message': 'Inicio de sesion exitoso.'
        #             }, status = status.HTTP_201_CREATED)
        #         else:
        #             token.delete()
        #             token = Token.objects.create(user = user)
        #             return Response({
        #                 'token': token.key,
        #                 'user': user_serializer.data,
        #                 'message': 'Inicio de sesion exitoso.'
        #             }, status = status.HTTP_201_CREATED)
        # else:
        #     return Response({'error': 'Nombre de usuario o contraseña incorrectos'})
        # return Response({'mensaje': 'Hi'}, status = status.HTTP_200_OK)