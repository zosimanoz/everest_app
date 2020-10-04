from django.contrib import admin
from .models import Setting, SEO


class SettingAdmin(admin.ModelAdmin):
    list_display = ('brand_name','email','contact_number1', 'status')
    
    def delete_queryset(self, request, queryset):
        queryset.update(is_deleted=True)

    def get_queryset(self, request):
        qs = super(SettingAdmin, self).get_queryset(request)
        return qs.filter(is_deleted=False)

class SEOAdmin(admin.ModelAdmin):
    list_display = ('meta_title','meta_keywords')
    
    def delete_queryset(self, request, queryset):
        queryset.update(is_deleted=True)

    def get_queryset(self, request):
        qs = super(SEOAdmin, self).get_queryset(request)
        return qs.filter(is_deleted=False)


admin.site.register(Setting, SettingAdmin)
admin.site.register(SEO, SEOAdmin)