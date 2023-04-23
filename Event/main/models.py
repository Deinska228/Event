from django.db import models


class Carousel(models.Model):
    name = models.CharField("Название", max_length=25)
    about = models.TextField("Описание")
    img = models.ImageField("Фото", upload_to="carousel/")
    urls = models.TextField("Ссылка")


class User(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.name
