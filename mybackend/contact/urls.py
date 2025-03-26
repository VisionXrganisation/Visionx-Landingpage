from django.urls import path
from .views import ContactFormView

urlpatterns = [
    path("send-email/", ContactFormView.as_view(), name="contact-email"),
]
