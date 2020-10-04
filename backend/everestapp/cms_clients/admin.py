from django.contrib import admin

from .models import Client, Testimonial

class ClientAdmin(admin.ModelAdmin):
    list_display = ('name', 'contact_number', 'created_on')
    list_filter = ('name',)
    search_fields = ['name', 'contact_number']
    list_per_page = 10

    def delete_queryset(self, request, queryset):
        queryset.update(is_deleted=True)

    def get_queryset(self, request):
        qs = super(ClientAdmin, self).get_queryset(request)
        return qs.filter(is_deleted=False)


class TestimonialAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'created_on')
    list_filter = ('name',)
    search_fields = ['name', 'email']
    list_per_page = 10

    def delete_queryset(self, request, queryset):
        queryset.update(is_deleted=True)

    def get_queryset(self, request):
        qs = super(TestimonialAdmin, self).get_queryset(request)
        return qs.filter(is_deleted=False)


admin.site.register(Client, ClientAdmin)
admin.site.register(Testimonial, TestimonialAdmin)