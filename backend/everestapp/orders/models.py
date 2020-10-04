from django.db import models
from django.contrib.auth import get_user_model
User = get_user_model()

STATUS = (
    (0, "Received"),
    (1, "Pending"),
    (2, "Completed")
)

class Order(models.Model):
    service_id = models.CharField(max_length=255)
    service_name = models.CharField(max_length=255, blank=True)
    service_type_id = models.CharField(max_length=50)
    service_type_name = models.CharField(max_length=50 , blank=True)
    service_category_id = models.CharField(max_length=50)
    service_category_name = models.CharField(max_length=50,blank=True)
    user = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, related_name='order_to_user')
    location = models.CharField(max_length=50, blank=True)
    ordered_on = models.DateTimeField(auto_now_add=True)
    approved_by = models.CharField(max_length=50, blank=True)
    status = models.IntegerField(choices=STATUS, default=0)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ['-ordered_on']

    def __str__(self):
        return self.user.name
