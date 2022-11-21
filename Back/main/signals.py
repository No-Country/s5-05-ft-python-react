from django.dispatch import receiver
from django.db.models.signals import post_save, post_delete
from .models import User, Jugador


@receiver (post_save, sender=User) #creo perfil Jugador al momento de crear User.
def update_save_jugador_perfil(sender, instance, created, **kwargs):
    user = instance
    if created: 
        jugador = Jugador.objects.create(usuario = user)
        jugador.save()



