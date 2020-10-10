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
            # cover_image = request.data['cover_image']
            # description = request.data['description']
            # contact_number = request.data['contact_number']
            # location = request.data['location']
            # service_id = request.data['service_id']
            # service_name = request.data['service_name']
            # service_type_id = request.data['service_type_id']
            # service_type_name = request.data['service_type_name']
            # service_category_id = request.data['service_category_id']
            # service_category_name = request.data['service_category_name']
            # timeslot = request.data['timeslot']
            # email = request.data['email']
            # name = request.data['name']
            # user = request.data['user']

            serializer = OrderSerializer(data=request.data)
            if serializer.is_valid(raise_exception=True):
                serializer.save()

            return Response({ 'status_code': status.HTTP_200_OK, 'data': 'Ordered created successfully'})
        except Order.DoesNotExist:
            return Response({ 'status_code': status.HTTP_404_NOT_FOUND, 'data': []})
