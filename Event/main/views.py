from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Carousel, User
from .forms import UserForm


def index(request):
    carousel_object = Carousel.objects.all()
    return render(request, "main/index.html", {"carousel_object": carousel_object})


def vhod(request):
    if request.method == "POST":
        form = UserForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data["username"]
            password = form.cleaned_data["password"]
            user = User(username=username, password=password)
            user.save()
            return redirect("index")
    else:
        form = UserForm()
    return render(request, "main/vhod.html", {"form": form})
