# Generated by Django 3.1.1 on 2020-10-06 15:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('everest_services', '0003_auto_20200930_1547'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='service',
            name='thumb_image_path',
        ),
        migrations.AlterField(
            model_name='service',
            name='cover_image_path',
            field=models.ImageField(blank=True, upload_to='services'),
        ),
    ]
