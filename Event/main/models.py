from django.db import models


class Carousel(models.Model):
    name = models.CharField("Название", max_length=25)
    about = models.TextField("Описание")
    img = models.ImageField("Фото", upload_to="carousel/")
    urls = models.TextField("Ссылка")

    def __str__(self):
        return self.name


class User(models.Model):
    username = models.CharField("Имя пользователя", max_length=50)
    password = models.CharField("Пароль", max_length=50)

    def __str__(self):
        return f"{self.username}"
