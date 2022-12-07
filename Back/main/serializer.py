from rest_framework import serializers
from .models import User, Jugador, Complejo
from django.contrib.auth import authenticate


class ChoiceField(serializers.ChoiceField):

    def to_representation(self, obj):
        if obj == '' and self.allow_blank:
            return obj
        try:
            return self._choices[obj]
        except:
            return obj

    def to_internal_value(self, data):
        if data == '' and self.allow_blank:
            return ''

        for key, val in self._choices.items():
            if val == data:
                return key
        self.fail('invalid_choice', input=data)


class UserTokenSerializer(serializers.ModelSerializer):

    email = serializers.EmailField(required=False, allow_blank=True)
    password = serializers.CharField(style={'input_type': 'password'})

    class Meta:
        model = User
        fields = ('id','email', 'password','is_jugador', 'is_complejo', 'perfil_completo')  


    def validate(self, attrs):
        username = attrs.get('email')
        password = attrs.get('password')

        if username and password:
            user = authenticate(request=self.context.get('request'),
                                username=username, password=password)
            if not user:
                msg = ('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = ('Must include "username" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model= User
        fields =    ['id','email','password', 'is_jugador','is_complejo', 'perfil_completo']
        extra_kwargs = {'passwords': {'write_only': True}}
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        user.save()
        return user

class JugadorSerializer(serializers.ModelSerializer):

    sexo = ChoiceField(choices = Jugador.SEXOS)
    rol = ChoiceField(choices=Jugador.ROLES)

    class Meta:
        model = Jugador
        exclude = ["id"]
        read_only_fields = ("editado","creado")

class ComplejoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Complejo
        exclude = ["id"]


 
    

    