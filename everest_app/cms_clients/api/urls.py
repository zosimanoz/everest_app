from django.contrib import admin
from django.urls import path, include, re_path

from .views import (
    ClientListAPIView,
    TestimonialListAPIView,
)

urlpatterns = [
    path('all/', ClientListAPIView.as_view()),
    path('testimonials/', TestimonialListAPIView.as_view()),
] 