# Generated by Django 2.1.7 on 2020-05-12 19:22

from django.db import migrations, models
import common.rename


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0002_auto_20200503_2048'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogs',
            name='thumbnail',
            field=models.ImageField(blank=True, max_length=200, null=True,
                                    upload_to=common.rename.FileUploader('blogs/', 'blogs')),
        ),
        migrations.AlterField(
            model_name='events',
            name='thumbnail',
            field=models.ImageField(blank=True, max_length=200, null=True,
                                    upload_to=common.rename.FileUploader('events/', 'events')),
        ),
        migrations.AlterField(
            model_name='homevision',
            name='image',
            field=models.ImageField(
                blank=True, null=True, upload_to=common.rename.FileUploader('home/', None)),
        ),
        migrations.AlterField(
            model_name='studentteam',
            name='photo',
            field=models.ImageField(
                max_length=200, upload_to=common.rename.FileUploader('members/', 'student')),
        ),
    ]
