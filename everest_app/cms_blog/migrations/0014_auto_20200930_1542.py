# Generated by Django 3.1.1 on 2020-09-30 15:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms_blog', '0013_auto_20200930_1541'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='cover_img_path',
            field=models.ImageField(default='0', max_length=255, upload_to=''),
        ),
    ]
