# Generated by Django 2.1.7 on 2020-04-10 15:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0025_mentorachievement'),
    ]

    operations = [
        migrations.CreateModel(
            name='MentorIntern',
            fields=[
                ('id', models.AutoField(auto_created=True,
                                        primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.TextField(blank=True, max_length=500, null=True)),
                ('duration', models.CharField(blank=True, max_length=50, null=True)),
                ('domain', models.TextField(blank=True, max_length=500, null=True)),
                ('mentor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE,
                                             related_name='mentor_intern', to='pages.Mentor')),
            ],
        ),
    ]
