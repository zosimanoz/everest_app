from django.contrib import admin
from .models import Service, ServiceCategory, ServiceOffering, ServiceReview, ServiceType


class ServiceCategoryAdmin(admin.ModelAdmin):
    list_display = ('category_name', 'status','created_on')
    list_filter = ("status",)
    search_fields = ['category_name', 'category_description']
    list_per_page = 10
    
    def delete_queryset(self, request, queryset):
        queryset.update(is_deleted=True)

    def get_queryset(self, request):
        qs = super(ServiceCategoryAdmin, self).get_queryset(request)
        return qs.filter(is_deleted=False)


class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'slug', 'status','created_on')
    list_filter = ("status",)
    search_fields = ['title', 'description']
    prepopulated_fields = {'slug': ('title',)} 
    list_per_page = 10

    def delete_queryset(self, request, queryset):
        queryset.update(is_deleted=True)

    def get_queryset(self, request):
        qs = super(ServiceAdmin, self).get_queryset(request)
        return qs.filter(is_deleted=False)


class ServiceTypeAdmin(admin.ModelAdmin):
    list_display = ('title', 'status','created_on')
    list_filter = ("status",)
    search_fields = ['title', 'description']

    def delete_queryset(self, request, queryset):
        queryset.update(is_deleted=True)

    def get_queryset(self, request):
        qs = super(ServiceTypeAdmin, self).get_queryset(request)
        return qs.filter(is_deleted=False)


class ServiceOfferingAdmin(admin.ModelAdmin):
    list_display = ('title', 'status','created_on')
    list_filter = ("status",)
    search_fields = ['title', 'description']
    list_per_page = 10

    def delete_queryset(self, request, queryset):
        queryset.update(is_deleted=True)

    def get_queryset(self, request):
        qs = super(ServiceOfferingAdmin, self).get_queryset(request)
        return qs.filter(is_deleted=False)


class ServiceReviewAdmin(admin.ModelAdmin):
    list_display = ('reviewedby_name', 'status','reviewed_on')
    list_filter = ("status",)
    search_fields = ['reviewedby_name']
    list_per_page = 10

    def delete_queryset(self, request, queryset):
        queryset.update(is_deleted=True)

    def get_queryset(self, request):
        qs = super(ServiceReviewAdmin, self).get_queryset(request)
        return qs.filter(is_deleted=False)
   

  
admin.site.register(ServiceCategory, ServiceCategoryAdmin)
admin.site.register(Service, ServiceAdmin)
admin.site.register(ServiceType, ServiceTypeAdmin)
admin.site.register(ServiceOffering, ServiceOfferingAdmin)
admin.site.register(ServiceReview, ServiceReviewAdmin)
