from django.test import TestCase
from .models import User
# Create your tests here.

class PerfilJugadorCreadoTest(TestCase):
    def test_perfil_jugador_creado(self):
        usuario = User(
            email = 'user@gmail.com',
            password = '1234')
        usuario.save()

        self.assertTrue(
            hasattr(usuario, 'Jugador')
            )


        