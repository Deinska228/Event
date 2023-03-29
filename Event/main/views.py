from django.shortcuts import render
from django.http import HttpResponse
from .models import Carousel


def index(request):
    carousel_object = Carousel.objects.all()
    return render(request, "main/index.html", {"carousel_object": carousel_object})


def vhod(request):
    context = {"content": "This is the content for the second page"}
    return render(request, "vhod.html", context)
