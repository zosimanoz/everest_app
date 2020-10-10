from django.contrib import admin
from django.urls import path, include, re_path

from .views import (
    ServiceListApiView,
    ServiceDetailListApiView,
    ServiceTypesApiView,
    ServiceReviewApiView,
)

urlpatterns = [
    path('detail/<slug:slug>', ServiceDetailListApiView.as_view()),
    path('all/', ServiceListApiView.as_view()),
    path('types/', ServiceTypesApiView.as_view()),
    path('<slug:slug>/reviews/', ServiceReviewApiView.as_view()),
] 