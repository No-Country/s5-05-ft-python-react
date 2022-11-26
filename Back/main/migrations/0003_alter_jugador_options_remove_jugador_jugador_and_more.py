# Generated by Django 4.1.3 on 2022-11-26 00:28

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_alter_complejo_altura'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='jugador',
            options={'ordering': ['-editado', '-creado'], 'verbose_name': 'Jugador', 'verbose_name_plural': 'Jugadores'},
        ),
        migrations.RemoveField(
            model_name='jugador',
            name='jugador',
        ),
        migrations.AddField(
            model_name='complejo',
            name='cant_cancha',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='complejo',
            name='cobertura',
            field=models.IntegerField(choices=[(1, 'Techada'), (2, 'Aire Libre')], default=1),
        ),
        migrations.AddField(
            model_name='complejo',
            name='superficie',
            field=models.IntegerField(choices=[(1, 'Cemento'), (2, 'Sintetico')], default=1),
        ),
        migrations.AddField(
            model_name='complejo',
            name='tipo_pared',
            field=models.IntegerField(choices=[(1, 'Cemento'), (2, 'Blindex')], default=1),
        ),
        migrations.AddField(
            model_name='jugador',
            name='cobertura',
            field=models.IntegerField(choices=[(1, 'Techada'), (2, 'Aire Libre')], default=1),
        ),
        migrations.AddField(
            model_name='jugador',
            name='creado',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='jugador',
            name='editado',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AddField(
            model_name='jugador',
            name='superficie',
            field=models.IntegerField(choices=[(1, 'Cemento'), (2, 'Sintetico')], default=1),
        ),
        migrations.AddField(
            model_name='jugador',
            name='tipo_pared',
            field=models.IntegerField(choices=[(1, 'Cemento'), (2, 'Blindex')], default=1),
        ),
        migrations.DeleteModel(
            name='Cancha',
        ),
    ]
