from django.db import models
from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField

STATUS = (
    (0, "Draft"),
    (1, "Publish")
)

class Client(models.Model):
    name = models.CharField(max_length=255)
    client_website = models.CharField(max_length=255, blank=True)
    contact_number = models.CharField(max_length=100, blank=True)
    description = RichTextField(blank=True, null=True)
    logo = models.ImageField(upload_to = 'clients')
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.name


class Testimonial(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    message = RichTextField(blank=True, null=True)
    profile_image = models.ImageField(upload_to = 'testimonials')
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.name
