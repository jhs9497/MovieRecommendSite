from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True) # 시리얼라이즈는 되지만 응답에는 포함시키지 않겠다.

    class Meta:
        model = User
        fields = ('username', 'password', 'introduce', 'id')
        extra_kwargs = {'password': {'write_only': True}}