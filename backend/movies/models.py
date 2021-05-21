from django.db import models
from django.conf import settings

# Create your models here.
class Genre(models.Model):
    name = models.TextField()


class Movie(models.Model):
    movie_id = models.IntegerField()
    title = models.CharField(max_length=100)
    overview = models.TextField()
    release_date = models.CharField(max_length=50, null = True)
    voteavg = models.IntegerField(default=0)
    poster_path = models.CharField(max_length=200)

    # FK
    genres = models.ManyToManyField(Genre, related_name ='movie_genre')
    like_users = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, null=True)


class Comment(models.Model):
    content = models.TextField()
    rank = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # FK
    # user랑 연결은 로그인까지 한 뒤에 생각 ㄱㄱ
    # comment_users = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    comment_movie = models.ForeignKey(Movie, on_delete=models.CASCADE)