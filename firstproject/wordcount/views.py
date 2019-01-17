from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'wordcount/home.html')

def about(request):
    return render(request, 'wordcount/about.html')

def result(request):
    text = request.GET["fulltext"]
    splited_text = text.split()
    return render(request, 'wordcount/result.html', { 'full' : text, 'total' : splited_text })