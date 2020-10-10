from rest_framework import serializers
from cms_pages.models import Page

class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = '__all__'
