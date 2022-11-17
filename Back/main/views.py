from django.shortcuts import render
from rest_framework.generics import GenericAPIView
from rest_framework.response import Response
from .serializer import JugadorSerializer
from django.http import JsonResponse
from .models import Jugador

# Create your views here.
# class RegistrationAPI(GenericAPIView):
#     serializer = JugadorSerializer

#     def post(self,request, *args, **kwargs):
#         serializer = self.get.serializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         user=serializer.save()
#         return Response({
#             'user':JugadorSerializer(user,context=self.get_serializer_context()).data,
#         })


def lista_jugador(request):
    if request.method == 'GET':
        jugador = Jugador.objects.all()
        serializer = JugadorSerializer(jugador, many=True)
        return JsonResponse(serializer.data, safe=False)