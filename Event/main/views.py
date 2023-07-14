from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Carousel
from django.core import serializers
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login


def index(request):
    carousel_object = Carousel.objects.all()
    return render(request, "index/index.html", {"carousel_object": carousel_object})


def maps(request):
    Carousel_json = serializers.serialize("json", Carousel.objects.all())
    data = json.loads(Carousel_json)
    return render(request, "map/map.html", {"data": Carousel_json})


@csrf_exempt
def my_view(request):
    username = request.POST["username"]
    password = request.POST["password"]
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)

    return render(request, "Login/login.html", data)


def register(request):
    form = UserCreationForm()
    error = ""
    if request.method == "POST":
        print()
        form = UserCreationForm(request.POST)
        All_object = User.objects.all()
        if form.is_valid():
            if str(form["username"].value()) not in list(map(str, All_object)):
                if str(form["password"].value()) == request.POST["password_repeat"]:
                    form.save()
                    return redirect("index")
                else:
                    error = "Пароли не совпадают"
            else:
                error = "Логин занят"

    data = {"form": form, "error": error}

    return render(request, "Login/register.html", data)


def create(request):
    return render(request, "create/create.html")
