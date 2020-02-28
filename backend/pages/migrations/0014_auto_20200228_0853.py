# Generated by Django 2.1.7 on 2020-02-28 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0013_mentordocs'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mentordocs',
            name='MentorsGuide',
        ),
        migrations.AddField(
            model_name='mentordocs',
            name='mentorsGuide',
            field=models.FileField(blank=True, null=True, upload_to='mentorDocs/'),
        ),
        migrations.AddField(
            model_name='mentordocs',
            name='name',
            field=models.CharField(default='', max_length=100),
        ),
    ]
