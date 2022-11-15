from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth.models import AbstractUser
from multiselectfield import MultiSelectField
from django.conf import settings


class User(AbstractUser):
    is_jugador = models.BooleanField(default=False)
    is_complejo = models.BooleanField(default=False)

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


