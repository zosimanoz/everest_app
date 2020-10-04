from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated
)
from cms_banner.models import Banner
from .serializers import BannerSerializer

class BannerListApiView(APIView):
    permission_classes = [AllowAny,]

    def get(self, request):
        try:
            queryset = Banner.objects.all()
            serializer_class = BannerSerializer(queryset, many=True)
            return Response({'status_code': status.HTTP_200_OK, 'data': serializer_class.data})
        except Banner.DoesNotExist:
            return Response({ 'status_code': status.HTTP_404_NOT_FOUND, 'data': []})

