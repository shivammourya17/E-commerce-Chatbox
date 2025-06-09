from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('getProducts/', views.getProducts, name="getProducts"),
    path('getProduct', views.getProduct, name="getProduct"),
    path('chat', views.chat, name="chat")
]