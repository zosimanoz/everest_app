from rest_framework import serializers
from cms_contact.models import Queries

class QueriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Queries
        fields = '__all__'

    def create(self, validated_data):
        return Queries.objects.create(**validated_data)

    def update(self, instance, validated_data):
       pass