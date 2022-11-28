from rest_framework import serializers
from .models import User, Jugador
from django.contrib.auth.hashers import make_password


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
        fields =    ['email',
            'password',  
            'is_jugador',
            'is_complejo'
            ]
        extra_kwargs = {'passwords': {'write_only': True}}
        
    def create(self, validated_data):
        user = User.objects.create_user(
            email=validated_data['email'],
            password = validated_data['password']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user

class JugadorSerializer(serializers.ModelSerializer):

    sexo = ChoiceField(choices = Jugador.SEXOS)
    rol = ChoiceField(choices=Jugador.ROLES)

    class Meta:
        model = Jugador
        fields = '__all__'
        read_only_fields = ('id',"usuario","editado","creado")

 
        
    