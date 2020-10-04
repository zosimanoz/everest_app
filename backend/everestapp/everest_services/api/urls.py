from django.contrib import admin
from django.urls import path, include, re_path

from .views import (
    ServiceListApiView,
    ServiceDetailListApiView,
    ServiceTypesApiView,
    ServiceReviewApiView,
)

urlpatterns = [
    path('detail/<int:id>', ServiceDetailListApiView.as_view()),
    path('all/', ServiceListApiView.as_view()),
    path('types/', ServiceTypesApiView.as_view()),
    path('<int:id>/reviews/', ServiceReviewApiView.as_view()),
] 