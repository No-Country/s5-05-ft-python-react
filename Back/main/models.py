from django.db import models
from django.contrib.auth.models import User
from django import forms
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

from django.contrib.postgres.fields import ArrayField
from datetime import datetime


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password = None, **extra_fields):
        if not email:
            raise ValueError('El usuario debe contener un email')   
        
        email = self.normalize_email(email)
        user = self.model(
            email = email,
            **extra_fields
            )

        user.set_password(password)
        user.save()

        return user
    
    def create_superuser(self, email, password, **extra_fields):
        user =   self.create_user(
            email,
            password = password)

        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user

class User(AbstractBaseUser, PermissionsMixin):
    username = None
    email = models.EmailField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_jugador = models.BooleanField(default=False)
    is_complejo = models.BooleanField(default=False)
    perfil_completo = models.BooleanField(default=False)
    fecha_ingreso = models.DateTimeField(default=datetime.now, blank=True)

    objects = CustomUserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class ChoiceArrayField(ArrayField):
     
    def formfield(self, **kwargs):
        defaults = {
            'form_class': forms.MultipleChoiceField,
            'choices': self.base_field.choices,
        }
        defaults.update(kwargs)
        return super(ArrayField, self).formfield(**defaults)

class Complejo(models.Model):
    
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    
    nombre = models.CharField(max_length=100)
    pais = models.CharField(max_length = 155, verbose_name = 'Pais')
    ciudad = models.CharField(max_length = 155, verbose_name = 'Ciudad')
    calle = models.CharField(max_length = 155)
    altura = models.IntegerField(null=True, blank=True)
    telefono = models.CharField(max_length=10, help_text='Número sin 0 ni 15', null = True, blank = True)

    cant_cancha = models.IntegerField(null=False, default=1)

    objects = CustomUserManager()

    # SPECS = [
    #     ("T", 'Techada'),
    #     ("AL", 'Aire Libre'),
    #     ("SC", 'Superficie Cemento'),
    #     ("SS", 'Superficie Sintetico'),
    #     ("PC", 'Pared Cemento'),
    #     ("PB", 'Pared Blindex')
    # ]

    # cancha_specs = MultiSelectField(choices = SPECS, null = True, blank = True, max_length = 30)

    class Meta:
        verbose_name = 'Complejo'
        verbose_name_plural = 'Complejos'

    def __str__(self):
        return (f'Nombre: {self.nombre}')



class Jugador(models.Model):
    
    MASCULINO='M'
    FEMENINO='F'
    SEXOS = [
        (MASCULINO, 'Masculino'),
        (FEMENINO, 'Femenino'),
    ]

    DRIVE='D'
    REVES='R'
    AMBOS='A'
    ROLES = [
        (DRIVE, 'Drive'),
        (REVES, 'Revés'),
        (AMBOS, 'Ambos'),
    ]
    
    objects = CustomUserManager()

    usuario = models.OneToOneField(User, on_delete=models.CASCADE, related_name='Jugador')
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    sexo = models.CharField(max_length=1, choices=SEXOS)
    rol = models.CharField(max_length=1, choices=ROLES, default=AMBOS)
    nivel = models.SmallIntegerField(choices=[(i,i) for i in range(1,8)], null = True, blank = True)
    telefono = models.CharField(max_length=10, help_text='Número sin 0 ni 15')
    
    lunes = ArrayField(models.CharField(max_length=255, blank=True),blank=True, default=list)
    martes = ArrayField(models.CharField(max_length=255, blank=True),blank=True, default=list)
    miercoles = ArrayField(models.CharField(max_length=255, blank=True),blank=True, default=list)
    jueves = ArrayField(models.CharField(max_length=255, blank=True),blank=True, default=list)
    viernes = ArrayField(models.CharField(max_length=255, blank=True),blank=True, default=list)
    sabado = ArrayField(models.CharField(max_length=255, blank=True),blank=True, default=list)
    domingo = ArrayField(models.CharField(max_length=255, blank=True),blank=True, default=list)

    
    SPECS = [
        ("T", 'Techada'),
        ("AL", 'Aire Libre'),
        ("SC", 'Superficie Cemento'),
        ("SS", 'Superficie Sintetico'),
        ("PC", 'Pared Cemento'),
        ("PB", 'Pared Blindex')
    ]

    cancha_specs = ChoiceArrayField(models.CharField(choices = SPECS, null = True, blank = True, max_length = 30), default=["T"])
    
    grilla = models.JSONField(default=[[False]*7]*32,blank=True,null=True)

    editado = models.DateTimeField(auto_now=True)
    creado = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        verbose_name = 'Jugador'
        verbose_name_plural = 'Jugadores'
        ordering = ['-editado','-creado']

    def __str__(self):
        return (f'Nombre: {self.nombre}  Apellido:{self.apellido}')






