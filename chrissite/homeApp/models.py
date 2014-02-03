from django.db import models
import datetime
# Create your models here.
class Article(models.Model):
	date = models.DateTimeField(auto_now_add=True, blank=True)
	content = models.TextField(max_length=200)
	signature = models.CharField(max_length=50)
