from django.db import models
from datetime import datetime
from django.contrib.auth import get_user_model
User = get_user_model()

STATUS = (
    (0,"Draft"),
    (1,"Publish")
)

class Post(models.Model):
    title = models.CharField(max_length=200, unique=True)
    tags = models.CharField(max_length=200, blank=True)
    slug = models.SlugField(max_length=200, unique=True)
    content = models.TextField()
    youtube_video_path = models.CharField(max_length=255, blank=True)
    cover_image_path = models.ImageField(upload_to='posts/%Y/%m/%d', blank=True)
    thumb_image_path = models.ImageField(upload_to='posts/thumbs/%Y/%m/%d', blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='cms_blog_posts')
    status = models.IntegerField(choices=STATUS, default=0)
    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ['-created_on']

    def __str__(self):
        return self.title