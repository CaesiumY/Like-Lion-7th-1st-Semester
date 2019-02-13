from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'wordcount/home.html')

def about(request):
    return render(request, 'wordcount/about.html')

def result(request):
    text = request.GET["fulltext"]
    splited_text = text.split()

    text_dic = {}

    for word in splited_text:
        if word in text_dic:
            text_dic[word] += 1
        else:
            text_dic[word] = 1

    return render(request, 'wordcount/result.html', { 'full' : text, 'total' : splited_text, 'count' : sorted(text_dic.items(), key=lambda x : x[1], reverse=True) })