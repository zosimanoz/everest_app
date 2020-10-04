from django.contrib import admin
from django.urls import path, include, re_path

from .views import (
    QueryApiView,
)

urlpatterns = [
    path('save/', QueryApiView.as_view()),
] 