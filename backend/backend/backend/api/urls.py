from django.urls import path
from .views import review_resume
urlpatterns=[path('review/',review_resume),]