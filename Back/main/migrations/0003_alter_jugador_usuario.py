# Generated by Django 4.1.3 on 2022-11-18 00:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_jugador_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='jugador',
            name='usuario',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='Jugador', to=settings.AUTH_USER_MODEL),
        ),
    ]