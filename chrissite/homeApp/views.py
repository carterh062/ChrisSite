from django.http import HttpResponse
from django.template import Context
from django.template.loader import get_template
from django.shortcuts import render
from chrissite.homeApp.models import Article
def home_view(request):
	article_list = Article.objects.all().order_by('-date')
	return render(request, 'home.html', {'article_list': article_list})