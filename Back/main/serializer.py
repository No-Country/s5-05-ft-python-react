from rest_framework import serializers
from .models import User, Jugador

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields = "__all__"
        exclude = ['username']

class JugadorSerializer(serializers.ModelSerializer):

    dias = serializers.SerializerMethodField()
    turnos = serializers.SerializerMethodField()
    class Meta:
        model = Jugador
        fields = "__all__"

    
    def create(self):
        user = User.objects.create()
        Jugador.objects.create(user=user)
        return user

    def get_dias(self, obj):
        return obj.get_dias_display()

    def get_turnos(self, obj):
        return obj.get_turnos_display()