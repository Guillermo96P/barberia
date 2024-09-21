from django.urls import path
from .views import register, login, BarberoListView, ServicioListView, ReservasView

urlpatterns = [
    path('register/', register, name='register'),
    path('login/', login, name='login'),
    path('reservas/', ReservasView.as_view(), name='reservas'), # Ruta para la vista de Reservas
    path('barberos/', BarberoListView.as_view(), name='barberos'), # Ruta para listar barberos
    path('servicios/', ServicioListView.as_view(), name='servicios'), # Ruta para listar Servicios
]