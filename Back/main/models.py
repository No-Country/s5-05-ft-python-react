from django.db import models
from django.contrib.auth.models import User
from multiselectfield import MultiSelectField

class Dias(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    opciones = [
        (1, 'Lunes'),
        (2, 'Martes'),
        (3, 'Miercoles'),
        (4, 'Jueves'),
        (5, 'Viernes'),
        (6, 'Sabado'),
        (7, 'Domingo'),
    ]
    dias = MultiSelectField(choices=opciones,max_length=50,null=True, blank=True)

class Horas(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    opciones = [
        (1, '08:00'),(2, '09:00'),(3, '10:00'),
        (4, '11:00'),(5, '12:00'),(6, '13:00'),
        (7, '14:00'),(8, '15:00'),(9, '16:00'),
        (10, '17:00'),(11, '18:00'),(12, '19:00'),
        (13, '20:00'),(14, '21:00'),(15, '22:00'),
        (16, '23:00')
    ]
    horas = MultiSelectField(choices=opciones,max_length=50,null=True, blank=True)

class Disponibilidad(models.Model):
    dias = models.ForeignKey(Dias, on_delete=models.CASCADE)
    horas = models.ForeignKey(Horas, on_delete=models.CASCADE)

class Perfil(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    dni = models.IntegerField(unique=True, error_messages ={"unique":"Este DNI ya está registrado."},null=True, blank=True)
    fecha_nacimiento = models.DateField(null=True, blank=True, default='1990-10-10')
    ciudad = models.CharField(max_length=100,null=True, blank=True)
    telefono = models.CharField(max_length=10, help_text='Número sin 0 ni 15',null=True, blank=True)
    disponibilidad = models.OneToOneField(Disponibilidad, on_delete=models.CASCADE)