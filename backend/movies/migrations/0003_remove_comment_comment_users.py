# Generated by Django 3.2.3 on 2021-05-21 05:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0002_comment_comment_movie'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comment',
            name='comment_users',
        ),
    ]
