from django.db import models

class Queries(models.Model):
    email = models.EmailField(max_length=255)
    name = models.CharField(max_length=255)
    contact_number = models.CharField(max_length=50)
    message = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    is_deleted = models.BooleanField(default=False)
