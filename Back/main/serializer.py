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

    # nombre = serializers.SerializerMethodField()
    #apellido = serializers.SerializerMethodField()
    #dias = serializers.SerializerMethodField()
    #turnos = serializers.SerializerMethodField()
    #sexo = serializers.SerializerMethodField()

    sexo = ChoiceField(choices = Jugador.SEXOS)
    dias = serializers.MultipleChoiceField(choices = Jugador.OP_DIAS)
    turnos = serializers.MultipleChoiceField(choices = Jugador.op_turnos)

    class Meta:
        model = Jugador
        fields = ["id", "nombre", "apellido", "sexo", "telefono", "nivel", "dias", "turnos", "usuario"]
        read_only_fields = ('id',)

    # def create(self):
    #     user = User.objects.create()
    #     Jugador.objects.create(user=user)
    #     return user

    # def update(self, instance, validated_data):
    #     instance.name = validated_data.get('nombre', instance.nombre)
    #     instance.save()
    #     return instance

    # def get_nombre(self, obj):
    #     return obj.nombre.capitalize()

    # def get_apellido(self, obj):
    #     return obj.apellido.capitalize()

    # def get_dias(self, obj):
    #     var = obj.get_dias_display().split(', ')
    #     return var

    # def get_turnos(self, obj):
    #     var = obj.get_turnos_display().split(', ')
    #     return var

    # def get_sexo(self, obj):
    #     return obj.get_sexo_display()
        
