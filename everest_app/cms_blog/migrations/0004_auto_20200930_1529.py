# Generated by Django 3.1.1 on 2020-09-30 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cms_blog', '0003_auto_20200930_1528'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='thumbnail_img_path',
            field=models.ImageField(upload_to='posts/thumbs/%Y/%m/%d'),
        ),
    ]
