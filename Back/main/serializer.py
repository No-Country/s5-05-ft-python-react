from rest_framework import serializers
from .models import User, Jugador

class JugadorSerializer(serializers.ModelSerializer):
    class Meta:
        model= User
        fields = "__all__"

    def create(self):
        user = User.objects.create()
        Jugador.objects.create(user=user)
        return user
        