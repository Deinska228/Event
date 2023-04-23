from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Carousel
from django.contrib.auth import authenticate, login
from .forms import MyAuthenticationForm


def index(request):
    carousel_object = Carousel.objects.all()
    return render(request, "main/index.html", {"carousel_object": carousel_object})


def login_view(request):
    if request.method == "POST":
        form = MyAuthenticationForm(request, data=request.POST)
        if form.is_valid():
            email = form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(request, email=email, password=password)
            if user is not None:
                login(request, user)
                return redirect("home")
            else:
                form.add_error(None, "Invalid email or password")
    else:
        form = MyAuthenticationForm(request)
    return render(request, "login.html", {"form": form})


def vhod(request):
    return render(request, "main/vhod.html")
