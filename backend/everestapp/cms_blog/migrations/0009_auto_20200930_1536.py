# Generated by Django 3.1.1 on 2020-09-30 15:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms_blog', '0008_auto_20200930_1535'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='images'),
        ),
        migrations.AlterField(
            model_name='post',
            name='thumbnail',
            field=models.ImageField(blank=True, null=True, upload_to='images'),
        ),
    ]
