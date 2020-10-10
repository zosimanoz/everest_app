# Generated by Django 3.1.1 on 2020-10-08 06:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0003_auto_20201002_1150'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='cover_image',
            field=models.ImageField(blank=True, null=True, upload_to='orders'),
        ),
        migrations.AddField(
            model_name='order',
            name='description',
            field=models.TextField(blank=True),
        ),
        migrations.AddField(
            model_name='order',
            name='email',
            field=models.EmailField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='order',
            name='name',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AddField(
            model_name='order',
            name='timeslot',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
