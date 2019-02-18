from django.urls import path, include
import accounts.views

urlpatterns = [
    path('signup/', accounts.views.signup, name="signup"),
    path('login/', accounts.views.login, name="login"),
    path('logout/', accounts.views.logout, name="logout"),
    path('social/', include('allauth.urls')),
]
