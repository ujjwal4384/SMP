# Generated by Django 2.1.7 on 2020-04-08 13:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0019_teamposition'),
    ]

    operations = [
        migrations.AlterField(
            model_name='studentteam',
            name='position',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE,
                                    related_name='team_position', to='pages.TeamPosition'),
        ),
    ]
