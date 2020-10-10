from rest_framework.views import APIView
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import (
    AllowAny,
    IsAuthenticated
)
from cms_blog.models import Post
from .serializers import PostSerializer

class BlogListApiView(APIView):
    permission_classes = [AllowAny,]

    def get(self, request):
        try:
            queryset = Post.objects.all()
            serializer_class = PostSerializer(queryset, many=True)
            return Response({'status_code': status.HTTP_200_OK, 'data': serializer_class.data})
        except Post.DoesNotExist:
            return Response({ 'status_code': status.HTTP_404_NOT_FOUND, 'data': []})

class BlogDetailApiView(APIView):
    permission_classes = [AllowAny,]

    def get(self, request, slug):
        try:
            queryset = Post.objects.get(slug=slug)
            serializer_class = PostSerializer(queryset)
            return Response({'status_code': status.HTTP_200_OK, 'data': serializer_class.data})
        except Post.DoesNotExist:
            return Response({ 'status_code': status.HTTP_404_NOT_FOUND, 'data': []})
