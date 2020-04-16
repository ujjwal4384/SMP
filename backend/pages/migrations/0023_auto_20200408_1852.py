# Generated by Django 2.1.7 on 2020-04-08 18:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0022_auto_20200408_1826'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='studentteam',
            name='is_coordinator',
        ),
        migrations.AddField(
            model_name='mentor',
            name='email',
            field=models.EmailField(default='', max_length=200),
        ),
        migrations.AddField(
            model_name='mentor',
            name='enrollno',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='mentor',
            name='mobile',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='mentor',
            name='resume',
            field=models.FileField(null=True, upload_to='mentors/resume'),
        ),
        migrations.AddField(
            model_name='studentteam',
            name='enrollno',
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name='mentor',
            name='photo',
            field=models.ImageField(
                max_length=200, upload_to='mentors/images'),
        ),
        migrations.AlterField(
            model_name='studentteam',
            name='mobile',
            field=models.IntegerField(null=True),
        ),
    ]
