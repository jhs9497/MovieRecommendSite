from django.db.models import fields
from rest_framework import serializers
from .models import Movie, Comment


class MovieListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = '__all__'


class MovieSerializer(serializers.ModelSerializer):

    class Meta:
        model = Movie
        fields = '__all__'


class CommentListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ['comment_users', 'comment_movie', 'comment_users_id', 'comment_movie_id']


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = '__all__'
        read_only_fields = ['comment_users', 'comment_movie', 'comment_users_id', 'comment_movie_id']