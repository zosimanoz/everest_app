from django.contrib import admin
from django.utils.html import format_html
from django.urls import path, include, re_path
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import permission_required
from .models import Order

class OrderAdmin(admin.ModelAdmin):
    def get_urls(self):
        urls = super(OrderAdmin, self).get_urls()
        custom_urls = [
            path('detail/<id>/', self.admin_site.admin_view(self.show_details)),
        ]
        
        return custom_urls + urls

    # change_list_template = "orders/orders_changelist.html"

    list_display = ('get_user', 'service_name','service_type_name','service_category_name','location','status','ordered_on','my_url_field',)
    list_filter = ('status',)
    list_per_page = 10

    def get_user(self, obj):
        return obj.user.name

    def delete_queryset(self, request, queryset):
        queryset.update(is_deleted=True)

    def get_queryset(self, request):
        qs = super(OrderAdmin, self).get_queryset(request)
        return qs.filter(is_deleted=False)

    def show_details(self, request, id):
        item = Order.objects.get(id = id)
        return render(request, "orders/detail.html", {'item': item})

    def my_url_field(self, obj):
        return format_html('<a href="detail/%s">View Detail</a>' % (obj.id))
    
    my_url_field.allow_tags = True
    my_url_field.short_description = 'Actions'
    get_user.short_description = 'User Name'


admin.site.register(Order, OrderAdmin)