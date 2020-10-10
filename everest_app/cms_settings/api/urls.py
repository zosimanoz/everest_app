from django.contrib import admin
from django.urls import path, include, re_path

from .views import (
    SettingListApiView,
    SEOListApiView,
)

urlpatterns = [
    path('config/', SettingListApiView.as_view()),
    path('seo/', SEOListApiView.as_view()),
] 