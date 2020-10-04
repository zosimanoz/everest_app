from django.contrib import admin
from django.urls import path, include, re_path

from .views import (
    PageDetailAPIView,
)

urlpatterns = [
    path('<slug>/', PageDetailAPIView.as_view()),
] 