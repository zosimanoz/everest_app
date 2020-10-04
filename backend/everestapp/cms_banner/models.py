from django.db import models

STATUS = (
    (0, "Draft"),
    (1, "Publish")
)

class Banner(models.Model):
    title = models.CharField(max_length=255)
    banner_image = models.ImageField(upload_to='services/%Y/%m/%d')
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now_add=True)
    status = models.IntegerField(choices=STATUS, default=0)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title
