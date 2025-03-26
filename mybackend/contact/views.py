from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings

class ContactFormView(APIView):
    def post(self, request):
        data = request.data
        name = data.get("name")
        email = data.get("email")
        subject = data.get("subject")
        message = data.get("message")

        if not all([name, email, subject, message]):
            return Response({"error": "All fields are required."}, status=400)

        try:
            send_mail(
                subject=f"Contact Form: {subject}",
                message=f"From: {name} ({email})\n\n{message}",
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=["infostalight@gmail.com"],  # Change to your email
                fail_silently=False,
            )
            return Response({"success": "Message sent successfully!"}, status=200)
        except Exception as e:
            return Response({"error": str(e)}, status=500)
