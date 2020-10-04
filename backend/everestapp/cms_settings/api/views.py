from rest_framework.generics import ListAPIView
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated
)
from cms_settings.models import Setting, SEO
from .serializers import SEOSerializer, SettingSerializer


class SettingListApiView(ListAPIView):
    queryset = Setting.objects.all()
    permission_classes = [AllowAny,]
    serializer_class = SettingSerializer


class SEOListApiView(ListAPIView):
    queryset = SEO.objects.all()
    permission_classes = [AllowAny,]
    serializer_class = SEOSerializer