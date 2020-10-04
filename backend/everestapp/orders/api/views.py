from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated
)
from orders.models import Order
from .serializers import OrderSerializer

class OrderApiView(APIView):
    permission_classes = [IsAuthenticated,]

    def post(self, request):
        try:
            order = request.data.get('order')
            serializer = OrderSerializer(data=order)
            if serializer.is_valid(raise_exception=True):
                serializer.save()

            return Response({ 'status_code': status.HTTP_200_OK, 'data': 'Ordered created successfully'})
        except Order.DoesNotExist:
            return Response({ 'status_code': status.HTTP_404_NOT_FOUND, 'data': []})
