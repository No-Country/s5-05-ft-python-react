from rest_framework import serializers
from .models import User, Jugador


class ChoiceField(serializers.ChoiceField):

    def to_representation(self, obj):
        if obj == '' and self.allow_blank:
            return obj
        try:
            return self._choices[obj]
        except:
            return obj

    def to_internal_value(self, data):
        # To support inserts with the value
        if data == '' and self.allow_blank:
            return ''

        for key, val in self._choices.items():
            if val == data:
                return key
        self.fail('invalid_choice', input=data)


class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model= User
        exclude = [
                'password', 
                'last_login', 
                'is_superuser', 
                #'username', 
                'first_name', 
                'last_name', 
                'date_joined',  
                'is_staff', 
                'fecha_ingreso',
                'groups',
                'user_permissions'
    ]



class JugadorSerializer(serializers.ModelSerializer):

    sexo = ChoiceField(choices = Jugador.SEXOS)
    rol = ChoiceField(choices=Jugador.ROLES)
    dias = serializers.MultipleChoiceField(choices = Jugador.OP_DIAS)
    turnos = serializers.MultipleChoiceField(choices = Jugador.OP_TURNOS)
    cancha_specs = serializers.MultipleChoiceField(choices = Jugador.SPECS)
    # superficie = ChoiceField(choices = Jugador.OP_SUPERFICIE)
    # tipo_pared = serializers.MultipleChoiceField(choices = Jugador.OP_TIPO_PARED)

    class Meta:
        model = Jugador
        fields = ["id", "nombre", "apellido", "sexo", "rol", "nivel", "telefono",
                "dias", "turnos", "cancha_specs","editado","creado"]
        read_only_fields = ('id',"usuario","editado","creado")

 
        
