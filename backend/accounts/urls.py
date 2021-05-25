from django.urls import path
from . import views


urlpatterns = [
    path('signup/', views.signup),

    # 유저정보 가져오기
    path('userinfo/', views.userinfo),
]
