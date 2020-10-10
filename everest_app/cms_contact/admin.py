from django.contrib import admin
from django.utils.html import format_html
from django.urls import path, include, re_path
from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth.decorators import permission_required
from .models import Queries

class QueriesAdmin(admin.ModelAdmin):
    def get_urls(self):
        urls = super(QueriesAdmin, self).get_urls()
        custom_urls = [
            path('detail/<int:id>/', self.admin_site.admin_view(self.show_details)),
        ]
        
        return custom_urls + urls

    # change_list_template = "cms_contact/cms_contact_changelist.html"

    list_display = ('name', 'email', 'contact_number', 'message', 'created_on','my_url_field',)
    search_fields = ['name', 'email', 'contact_number']
    list_per_page = 10

    def delete_queryset(self, request, queryset):
        queryset.update(is_deleted=True)

    def get_queryset(self, request):
        qs = super(QueriesAdmin, self).get_queryset(request)
        return qs.filter(is_deleted=False)

    def show_details(self, request, id):
        item = Queries.objects.get(id = id)
        return render(request, "cms_contact/detail.html", {'item': item})

    def my_url_field(self, obj):
        return format_html('<a href="detail/%s">View Detail</a>' % (obj.id))
    
    my_url_field.allow_tags = True
    my_url_field.short_description = 'Actions'

admin.site.register(Queries, QueriesAdmin)