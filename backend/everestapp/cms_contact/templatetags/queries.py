import datetime
from django import template
from cms_contact.models import Queries

register = template.Library()

@register.inclusion_tag('queries_count.html')
def get_queries_count():
    count = Queries.objects.count()
    return {'count': count}
