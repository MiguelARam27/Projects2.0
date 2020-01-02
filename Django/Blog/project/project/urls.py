"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""


from django.contrib import admin
from django.urls import path
from django.conf.urls import url
from blog import views as blog_views
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    # path('admin/', admin.site.urls),
    # path('post/', blog_views.post),
    # path('/',blog_views.index),


    path('post/<slug:slug>', blog_views.post,name="post"),
    path('', blog_views.index,name='index'),
    path('admin/', admin.site.urls,name='admin'),
    path('about/',blog_views.about,name='about'),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
