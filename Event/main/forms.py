from .models import User
from django.forms import ModelForm, TextInput


class UserForm(ModelForm):
    class Meta:
        model = User
        fields = ["username", "password", "password"]

        widgets = {
            "username": TextInput(
                attrs={"class": "login", "placeholder": "Введите имя пользователя"}
            ),
            "password": TextInput(
                attrs={
                    "class": "password",
                    "placeholder": "Введите пароль",
                    "type": "password",
                }
            ),
        }
