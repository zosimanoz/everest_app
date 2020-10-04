from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from rest_framework import routers

# from todo import views                            

# router = routers.DefaultRouter()                     
# router.register(r'todos', views.TodoView, 'todo')    

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/accounts/', include('accounts.urls')), 
    path('admin/', admin.site.urls),
    path('api/v1/services/', include('everest_services.api.urls')),
    path('api/v1/settings/', include('cms_settings.api.urls')),
    path('api/v1/page/', include('cms_pages.api.urls')),
    path('api/v1/clients/', include('cms_clients.api.urls')),
    path('api/v1/banner/', include('cms_banner.api.urls')),
    path('api/v1/order/', include('orders.api.urls')),
    path('api/v1/query/', include('cms_contact.api.urls')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]