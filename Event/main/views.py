from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Carousel
from django.core import serializers
import json
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import logout
from .forms import UserForm
from django.contrib.auth.models import User


def index(request):
    carousel_object = Carousel.objects.all()
    return render(request, "index/index.html", {"carousel_object": carousel_object})


def maps(request):
    logout(request)
    Carousel_json = serializers.serialize("json", Carousel.objects.all())
    data = json.loads(Carousel_json)
    return render(request, "map/map.html", {"data": Carousel_json})


@csrf_exempt
def login(request):
    form = UserForm()
<<<<<<< HEAD
    if request.user.is_authenticated:
        print("Already logged in")
    else:
        print("n")
    error = ""
=======
    error = ''
    print(request.session.items() )
>>>>>>> 1
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
                    error = "Пароли не совпадают"
            else:
                error = "Логин занят"

<<<<<<< HEAD
    data = {"form": form, "error": error}

    return render(request, "Login/register.html", data)
=======
                    
                
    data = {
        'form': form,
        'error': error
    }
    
    return render(request, "Login/register.html", data)

def create(request):
    return render(request, 'create/create.html')
>>>>>>> 1
