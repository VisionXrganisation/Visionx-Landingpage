from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/contact/", include("contact.urls")),  # Ensure you have a `contact` app with `urls.py`
]
