from django.contrib import admin
from .models import User, Jugador, Complejo

class JugadorAdmin(admin.ModelAdmin):
    readonly_fields = ('creado','editado')

admin.site.register(User)
admin.site.register(Jugador)
admin.site.register(Complejo)

