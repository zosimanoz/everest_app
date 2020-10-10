import datetime
from django import template
from orders.models import Order

register = template.Library()

@register.inclusion_tag('orders_count.html')
def get_orders_count():
    count = Order.objects.count()
    return {'count': count}
