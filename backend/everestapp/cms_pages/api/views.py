from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import (
    PageSerializer
)
from cms_pages.models import Page


class PageDetailAPIView(RetrieveAPIView):
    queryset = Page.objects.all()
    permission_classes = [AllowAny,]
    serializer_class = PageSerializer
    lookup_field = 'slug'