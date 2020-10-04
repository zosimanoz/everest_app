from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from .serializers import (
    ClientSerializer,
    TestimonialSerializer,
)
from cms_clients.models import Client, Testimonial


class ClientListAPIView(ListAPIView):
    queryset = Client.objects.all()
    permission_classes = [AllowAny,]
    serializer_class = ClientSerializer

class TestimonialListAPIView(ListAPIView):
    queryset = Testimonial.objects.all()
    permission_classes = [AllowAny,]
    serializer_class = TestimonialSerializer