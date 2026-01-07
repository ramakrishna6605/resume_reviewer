from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response



# @api_view(['GET'])
# def home(request):
#     return Response({"message":"Backend is running"})
@api_view(['GET','POST'])
def review_resume(request):
    print("Received data from frontend",request.data)
    resume_text=request.data.get('resume')

    return Response({
        "message":"Resume received successfully!",
        "received_resume":resume_text
    })
