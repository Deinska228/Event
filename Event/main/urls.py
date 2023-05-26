from django.urls import path

from . import views
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('', views.index, name='index'),
    path('Maps', views.maps, name='Maps'),
    path("login", views.login, name="login"),
    path("register", views.register, name="register"),
    path("create", views.create, name="create"),
] 
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)