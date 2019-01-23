from django.shortcuts import render
from .models import blog

# Create your views here.
def home(request):
    blogs = blog.objects
    return render(request, 'home.html', {'blogs': blogs})