from django.db import models
from datetime import datetime
from django.contrib.auth import get_user_model
User = get_user_model()


STATUS = (
    (0, "Draft"),
    (1, "Publish")
)


class ServiceCategory(models.Model):
    category_name = models.CharField(max_length=50)
    category_description = models.TextField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.category_name


class Service(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255, unique=True)
    description = models.TextField()
    short_description = models.TextField(blank=True)
    cover_image_path = models.ImageField(upload_to='services/%Y/%m/%d', blank=True)
    thumb_image_path = models.ImageField(upload_to='services/thumbs/%Y/%m/%d', blank=True)
    minimum_visit_price = models.CharField(max_length=50)
    updated_on = models.DateTimeField(auto_now_add=True)
    created_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title

    @property
    def offerings(self):
        return self.serviceofferings_to_services.all()     
    
    @property
    def service_types(self):
        return self.servicetype_to_services.all()

    @property
    def reviews(self):
        return self.reviews_to_services.all()

    @property
    def categories(self):
        return ServiceCategory.objects.all()


class ServiceType(models.Model):
    service_id = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='servicetype_to_services')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title


class ServiceOffering(models.Model):
    service_id = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='serviceofferings_to_services')
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title


class ServiceReview(models.Model):
    service_id = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='reviews_to_services')
    reviewed_by = models.CharField(max_length=255)
    reviewedby_name = models.CharField(max_length=255)
    review = models.TextField()
    reviewed_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ['-reviewed_on']

    def __str__(self):
        return self.review
