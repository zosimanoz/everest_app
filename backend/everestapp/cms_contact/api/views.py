from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated
)
from cms_contact.models import Queries
from .serializers import QueriesSerializer

class QueryApiView(APIView):
    permission_classes = [AllowAny,]

    def post(self, request):
        try:
            query = request.data.get('query')
            serializer = QueriesSerializer(data=query)
            if serializer.is_valid(raise_exception=True):
                serializer.save()

            return Response({ 'status_code': status.HTTP_200_OK, 'data': 'Query sent successfully'})
        except Queries.DoesNotExist:
            return Response({ 'status_code': status.HTTP_404_NOT_FOUND, 'data': []})
