# Generated by Django 2.1.7 on 2019-03-19 11:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0002_faq_studentteam'),
    ]

    operations = [
        migrations.CreateModel(
            name='branch',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('branch_name', models.CharField(default='', max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Mentor',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(blank=True, max_length=1000, null=True)),
                ('photo', models.ImageField(max_length=200, upload_to='mentors/')),
                ('facebook', models.URLField(blank=True, db_index=True, max_length=1000)),
                ('linkden', models.URLField(blank=True, db_index=True, max_length=1000)),
                ('branch', models.CharField(default='', max_length=100)),
                ('year', models.CharField(default='', max_length=100)),
            ],
        ),
    ]
