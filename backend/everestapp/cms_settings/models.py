from django.db import models

STATUS = (
    (0, "Active"),
    (1, "Under Maintainance")
)

class Setting(models.Model):
    brand_name = models.CharField(max_length=255)
    legal_name = models.CharField(max_length=255, blank=True)
    logo = models.ImageField(upload_to='settings')
    favicon = models.ImageField(upload_to='settings')
    email = models.EmailField(max_length=255)
    company_registration_number = models.CharField(max_length=100, blank=True)
    contact_number1 = models.CharField(max_length=50)
    contact_number2 = models.CharField(max_length=50, blank=True)
    copyright_text = models.CharField(max_length=255)
    map_iframe_script = models.TextField(blank=True)
    google_analytics_script = models.TextField(blank=True)
    custom_header_script = models.TextField(blank=True)
    custom_footer_script = models.TextField(blank=True)
    facebook_url = models.CharField(max_length=255,blank=True)
    twitter_url = models.CharField(max_length=255,blank=True)
    instagram_url = models.CharField(max_length=255,blank=True)
    youtube_url = models.CharField(max_length=255,blank=True)
    use_https = models.BooleanField(default=0)
    status = models.IntegerField(choices=STATUS, default=0)
    is_deleted = models.BooleanField(default=False)

    class Meta:
        ordering = ['-brand_name']

    def __str__(self):
        return self.brand_name


class SEO(models.Model):
    meta_title = models.CharField(max_length=255)
    meta_keywords = models.TextField()
    meta_descriptions = models.TextField()
    is_deleted = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-meta_title']

    def __str__(self):
        return self.meta_title