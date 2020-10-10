from django.contrib import admin
from django.urls import path, include, re_path

from .views import (
    BlogListApiView,
    BlogDetailApiView
)

urlpatterns = [
    path('all/', BlogListApiView.as_view()),
    path('<slug:slug>/detail/', BlogDetailApiView.as_view()),
] 