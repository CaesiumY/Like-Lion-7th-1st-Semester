from django.db import models
from django.utils import timezone

# Create your models here.


class Blog(models.Model):
    objects = models.Manager()
    # author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date_published')
    # created_date = models.DateTimeField(
    #     default=timezone.now)
    body = models.TextField()

    def __str__(self):
        return self.title

    def summary(self):
        return self.body[:100]

    def publish(self):
        self.pub_date = timezone.now()
        self.save()
