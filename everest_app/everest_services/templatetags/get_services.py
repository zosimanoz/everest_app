import datetime
from django import template
from everest_services.models import Service

register = template.Library()

@register.inclusion_tag('services_count.html')
def get_services_count():
    count = Service.objects.count()
    return {'count': count}
