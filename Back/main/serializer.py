from rest_framework import serializers
from .models import User, Jugador
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
        # To support inserts with the value
        if data == '' and self.allow_blank:
            return ''

        for key, val in self._choices.items():
            if val == data:
                return key
        self.fail('invalid_choice', input=data)


class UserTokenSerializer(serializers.ModelSerializer):

    # email = serializers.EmailField(required=False, allow_blank=True)
    # password = serializers.CharField(style={'input_type': 'password'})
    # token = serializers.CharField(allow_blank=True, read_only=True)
    class Meta:
        model = User
        fields = ('email', 'password',) 


    # def validate(self, data):
    # # user = None
    #     email = data.get('email')
    #     password = data.get('password')
    #     if not email:
    #         raise serializers.ValidationError('Email is required for login')
    #     if not password:
    #         raise serializers.ValidationError('Password is required for login')
    #     user = authenticate(email=email, password=password)
    #     if not user:
    #         raise serializers.ValidationError('This email is not valid/already exists')
    #     data['user'] = user
    #     return data

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model= User
        fields =    ['email','password', 'is_jugador','is_complejo']
        extra_kwargs = {'passwords': {'write_only': True}}
        
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        user.set_password(user.password)
        user.save()
        return user

class JugadorSerializer(serializers.ModelSerializer):

    sexo = ChoiceField(choices = Jugador.SEXOS)
    rol = ChoiceField(choices=Jugador.ROLES)

    class Meta:
        model = Jugador
        exclude = ["usuario"]
        read_only_fields = ('id',"editado","creado")

 
    

    