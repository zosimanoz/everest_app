from django.contrib import admin
from django.urls import path, include, re_path

from .views import (
    OrderApiView,
)

urlpatterns = [
    path('save/', OrderApiView.as_view()),
] 