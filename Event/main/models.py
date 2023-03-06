from django.db import models


class Image(models.Model):
    name = models.CharField("Название", max_length=25)
    about = models.TextField("Описание")


    def __str__(self) :
        return self.name

