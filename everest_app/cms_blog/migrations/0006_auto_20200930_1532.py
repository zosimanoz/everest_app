# Generated by Django 3.1.1 on 2020-09-30 15:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cms_blog', '0005_auto_20200930_1531'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='cover_img_path',
        ),
        migrations.RemoveField(
            model_name='post',
            name='thumbnail_img_path',
        ),
    ]
