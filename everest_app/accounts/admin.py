from django.contrib import admin
from .models import UserAccount


class UserAccountAdmin(admin.ModelAdmin):
    list_display = ('name',)

    def has_add_permission(self, request, obj=None):
        return False

    def get_form(self, request, obj=None, **kwargs):
        self.exclude = ("password", )
        form = super(UserAccountAdmin, self).get_form(request, obj, **kwargs)
        return form
  
admin.site.register(UserAccount, UserAccountAdmin)