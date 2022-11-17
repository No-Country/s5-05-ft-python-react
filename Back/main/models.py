from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser, BaseUserManager, PermissionsMixin
from multiselectfield import MultiSelectField
from django.conf import settings
from datetime import datetime


class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
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



class User(AbstractUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_jugador = models.BooleanField(default=False)
    is_complejo = models.BooleanField(default=False)
    fecha_ingreso = models.DateTimeField(default=datetime.now, blank=True)
    #username = models.CharField('username', max_length=255, unique = True)

    objects = CustomUserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

class Jugador(models.Model):
    usuario = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    op_dias = [
        (1, 'Lunes'),
        (2, 'Martes'),
        (3, 'Miercoles'),
        (4, 'Jueves'),
        (5, 'Viernes'),
        (6, 'Sabado'),
        (7, 'Domingo'),
    ]
    dias = MultiSelectField(choices=op_dias,max_length=7,null=True, blank=True)

    op_turnos = [
        ('M', 'Mañana'),
        ('T', 'Tarde'),
        ('N', 'Noche'),
    ]
    turnos = MultiSelectField(choices=op_turnos,max_length=3,null=True, blank=True)
    
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)

    MASCULINO='M'
    FEMENINO='F'
    SEXOS = [
        (MASCULINO, 'Masculino'),
        (FEMENINO, 'Femenino'),
    ]
    
    sexo = models.CharField(max_length=1, choices=SEXOS)
    nivel = models.SmallIntegerField(choices=[(i,i) for i in range(1,8)])
    telefono = models.CharField(max_length=10, help_text='Número sin 0 ni 15')

    class Meta:
        verbose_name = 'Jugador'
        verbose_name_plural = 'Jugadores'

    def str(self):
        return (f'Nombre: {self.nombre} Apellido:{self.apellido}')


class Complejo(models.Model):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=100)
    
    direccion = models.CharField(max_length=150)

    class Meta:
        verbose_name = 'Complejo'
        verbose_name_plural = 'Complejos'

    def str(self):
        return self.nombre

class Cancha(models.Model):

    techada = models.BooleanField(default=False)     # si es T es aire libre
    piso_sint = models.BooleanField(default=False)     # si es T es cemento
    pared_blindex = models.BooleanField(default=False)    # si es T es sintex
    complejo = models.ForeignKey(Complejo, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Cancha'
        verbose_name_plural = 'Canchas'


