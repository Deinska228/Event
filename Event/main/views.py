from django.shortcuts import render
from django.http import HttpResponse
from .models import Carousel
from django.core import serializers
import json


def index(request):
    carousel_object = Carousel.objects.all()
    return render(request, 'index/index.html', {'carousel_object': carousel_object})

def map(request):
    Carousel_json = serializers.serialize("json", Carousel.objects.all())
    data = json.loads(Carousel_json)
    return render(request, 'map/map.html', {'data': Carousel_json})