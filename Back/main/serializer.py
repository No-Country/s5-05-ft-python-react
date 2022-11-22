from rest_framework import serializers
from .models import User, Jugador

class UserSerializer(serializers.ModelSerializer):
    
    # dias = serializers.SerializerMethodField()
    # turnos = serializers.SerializerMethodField()
    
    class Meta:
        model= User
        fields = "__all__"



class JugadorSerializer(serializers.ModelSerializer):

    nombre = serializers.SerializerMethodField()
    apellido = serializers.SerializerMethodField()
    dias = serializers.SerializerMethodField()
    turnos = serializers.SerializerMethodField()
    sexo = serializers.SerializerMethodField()

    class Meta:
        model = Jugador
        fields = "__all__"

    def create(self):
        user = User.objects.create()
        Jugador.objects.create(user=user)
        return user

    def get_nombre(self, obj):
        return obj.nombre.capitalize()

    def get_apellido(self, obj):
        return obj.apellido.capitalize()

    def get_dias(self, obj):
        var = obj.get_dias_display().split(', ')
        return var

    def get_turnos(self, obj):
        return obj.get_turnos_display()

    def get_sexo(self, obj):
        return obj.get_sexo_display()