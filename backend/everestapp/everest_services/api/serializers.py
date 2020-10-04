from rest_framework import serializers
from everest_services.models import (
    Service, 
    ServiceOffering, 
    ServiceCategory, 
    ServiceReview, 
    ServiceType
)


class ServiceCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceCategory
        fields = '__all__'


class ServiceOfferingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceOffering
        fields = '__all__'


class ServiceTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceType
        fields = '__all__'


class ServiceReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceReview
        fields = '__all__'


class ServiceListSerializer(serializers.ModelSerializer):
    offerings = ServiceOfferingSerializer(many=True)
    service_types = ServiceTypeSerializer(many = True)
    categories = ServiceCategorySerializer(many = True)

    class Meta:
        model = Service
        fields = [
            'title', 
            'slug',
            'description',
            'short_description',
            'cover_image_path',
            'thumb_image_path',
            'minimum_visit_price',
            'created_on',
            'offerings',
            'service_types',
            'categories'
        ]


class ServiceAllListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'
