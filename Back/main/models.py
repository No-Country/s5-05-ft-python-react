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

    objects = CustomUserManager()
    
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []


class Complejo(models.Model):
    

    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=100)

    pais = models.CharField(max_length = 155, verbose_name = 'Pais')
    ciudad = models.CharField(max_length = 155, verbose_name = 'Ciudad')
    calle = models.CharField(max_length = 155)
    altura = models.IntegerField(null = True, blank = True)


    class Meta:
        verbose_name = 'Complejo'
        verbose_name_plural = 'Complejos'

    def __str__(self):
        return (f'Nombre: {self.nombre}')


class Cancha(models.Model):

    OP_COBERTURA = [
        (1, 'Techada'),
        (2, 'Aire Libre')
    ]

    OP_SUPERFICIE = [
        (1, 'Cemento'),
        (2, 'Sintetico')
    ]

    OP_TIPO_PARED = [ 
        (1, 'Cemento'),
        (2, 'Blindex')
    ]

    cobertura = models.IntegerField(choices = OP_COBERTURA, default = 1)
    superficie = models.IntegerField(choices = OP_SUPERFICIE, default = 1)
    tipo_pared = models.IntegerField(choices = OP_TIPO_PARED, default = 1)

    # techada = models.BooleanField(default=False)     # si es T es aire libre
    # piso_sint = models.BooleanField(default=False)     # si es T es cemento
    # pared_blindex = models.BooleanField(default=False)    # si es T es sintex
    complejo = models.ForeignKey(Complejo, on_delete=models.CASCADE)
    

    class Meta:
        verbose_name = 'Cancha'
        verbose_name_plural = 'Canchas'


class Jugador(models.Model):
    
    OP_DIAS = [
        ('Lu', 'Lunes'),
        ('Ma', 'Martes'),
        ('Mi', 'Miercoles'),
        ('Ju', 'Jueves'),
        ('Vi', 'Viernes'),
        ('Sa', 'Sabado'),
        ('Do', 'Domingo'),
    ]
    
    op_turnos = [
        ('M', 'Mañana'),
        ('T', 'Tarde'),
        ('N', 'Noche'),
    ]

    MASCULINO='M'
    FEMENINO='F'
    SEXOS = [
        (MASCULINO, 'Masculino'),
        (FEMENINO, 'Femenino'),
    ]
    
    usuario = models.OneToOneField(User, on_delete=models.CASCADE, related_name='Jugador')
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    sexo = models.CharField(max_length=1, choices=SEXOS)
    nivel = models.SmallIntegerField(choices=[(i,i) for i in range(1,8)], null = True, blank = True)
    telefono = models.CharField(max_length=10, help_text='Número sin 0 ni 15')
    dias = MultiSelectField(choices = OP_DIAS, null = True, blank = True, max_length = 20)
    turnos = MultiSelectField(choices=op_turnos,max_length=5,null=True, blank=True)

    jugador = models.ManyToManyField(Cancha)
    
    class Meta:
        verbose_name = 'Jugador'
        verbose_name_plural = 'Jugadores'

    def __str__(self):
        return (f'Nombre: {self.nombre} Apellido:{self.apellido}')

        



