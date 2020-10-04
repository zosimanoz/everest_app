from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import status
from everest_services.models import (
    Service, 
    ServiceOffering, 
    ServiceType, 
    ServiceReview, 
    ServiceCategory
)
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated
)
from django.db import connection
from .serializers import (
    ServiceListSerializer, 
    ServiceOfferingSerializer,
    ServiceReviewSerializer,
    ServiceTypeSerializer,
    ServiceCategorySerializer,
    ServiceAllListSerializer
)
import itertools    


class ServiceDetailListApiView(APIView):
    permission_classes = [AllowAny,]

    def get(self, request, id):
        try:
            queryset = Service.objects.get(id=id)
            serializer_class = ServiceListSerializer(queryset)
            return Response({'status_code': status.HTTP_200_OK, 'data': serializer_class.data})
        except Service.DoesNotExist:
            return Response({ 'status_code': status.HTTP_404_NOT_FOUND, 'data': []})


class ServiceListApiView(APIView):
    permission_classes = [AllowAny,]

    def get(self, request):
        try:
            queryset = Service.objects.all()
            serializer_class = ServiceAllListSerializer(queryset, many=True)
            return Response({'status_code': status.HTTP_200_OK, 'data': serializer_class.data})
        except Service.DoesNotExist:
            return Response({ 'status_code': status.HTTP_404_NOT_FOUND, 'data': []})



class ServiceTypesApiView(APIView):
    permission_classes = [AllowAny,]

    def get(self, request):
        try:
            queryset = ServiceType.objects.all()
            serializer_class = ServiceTypeSerializer(queryset, many=True)
            return Response({'status_code': status.HTTP_200_OK, 'data': serializer_class.data})
        except ServiceType.DoesNotExist:
            return Response({ 'status_code': status.HTTP_404_NOT_FOUND, 'data': []})


class ServiceReviewApiView(APIView):
    permission_classes = [AllowAny,]

    def get(self, request, id):
        try:
            queryset = ServiceReview.objects.get(id=id)
            serializer_class = ServiceReviewSerializer(queryset)
            return Response({'status_code':status.HTTP_200_OK, 'data': serializer_class.data})
        except ServiceReview.DoesNotExist:
            return Response({ 'status_code': status.HTTP_404_NOT_FOUND, 'data': []})
