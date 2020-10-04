from django.contrib import admin
from .models import Banner

class BannerAdmin(admin.ModelAdmin):
    list_display = ('title', 'status', 'created_on')
    list_filter = ('status',)
    search_fields = ['title']
    list_per_page = 10

    def delete_queryset(self, request, queryset):
        queryset.update(is_deleted=True)

    def get_queryset(self, request):
        qs = super(BannerAdmin, self).get_queryset(request)
        return qs.filter(is_deleted=False)


admin.site.register(Banner, BannerAdmin)
