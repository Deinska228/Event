from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Carousel, User
from django.core import serializers
import json
from django.views.decorators.csrf import csrf_exempt

from .forms import UserForm


def index(request):
    carousel_object = Carousel.objects.all()
    return render(request, "index/index.html", {"carousel_object": carousel_object})


def maps(request):
    Carousel_json = serializers.serialize("json", Carousel.objects.all())
    data = json.loads(Carousel_json)
    return render(request, "map/map.html", {"data": Carousel_json})


@csrf_exempt
def login(request):
    form = UserForm()
    error = ""
    if request.method == "POST":
        form = UserForm(request.POST)
        All_object = User.objects.all()
        if form.is_valid():
            if str(form["username"].value()) in list(map(str, All_object)):
                if str(
                    All_object[
                        list(map(str, All_object)).index(str(form["username"].value()))
                    ].password
                ) == str(form["password"].value()):
                    return redirect("index")
                else:
                    error = "Неверный логин или пароль"
            else:
                error = "Неверный логин или пароль"

    data = {"form": form, "error": error}

    return render(request, "Login/login.html", data)


def register(request):
    form = UserForm()
    error = ""
    if request.method == "POST":
        print()
        form = UserForm(request.POST)
        All_object = User.objects.all()
        if form.is_valid():
            if str(form["username"].value()) not in list(map(str, All_object)):
                if str(form["password"].value()) == request.POST["password_repeat"]:
                    form.save()
                    return redirect("index")
                else:
                    error = "Пороли не совпадают"
            else:
                error = "Логин занят"

    data = {"form": form, "error": error}

    return render(request, "Login/register.html", data)
