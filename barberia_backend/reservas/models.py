# reservas/models.py

from django.db import models
from django.contrib.auth.models import User, AbstractUser

class CustomUser(AbstractUser):

    ROLE_CHOICES = (
        ('admin', 'Administrador'),
        ('barbero', 'Barbero'),
        ('cliente', 'Cliente')
    )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='cliente')

    def __str__(self):
        return f'{self.username ({self.role})}'

class Barbero(models.Model):
    # Modelo para barberos
    nombre = models.CharField(max_length=100)  # Nombre del barbero
    especialidad = models.CharField(max_length=100)  # Especialidad del barbero
    disponibilidad = models.JSONField()  # Disponibilidad en formato JSON
    imagen = models.URLField(null=True, blank=True) # Añadir URL para la imagen del Barbero

    def __str__(self):
        return self.nombre

class Servicio(models.Model):
    # Modelo para servicios
    nombre = models.CharField(max_length=100)  # Nombre del servicio
    duracion = models.DurationField()  # Duración del servicio
    precio = models.DecimalField(max_digits=10, decimal_places=2)  # Precio del servicio

    def __str__(self):
        return self.nombre

class Cliente(models.Model):
    # Modelo para clientes
    nombre = models.CharField(max_length=100)  # Nombre del cliente
    email = models.EmailField()  # Correo electrónico del cliente

    def __str__(self):
        return self.nombre

class Reserva(models.Model):
    # Modelo para reservas
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)  # Relación con el cliente
    barbero = models.ForeignKey(Barbero, on_delete=models.CASCADE)  # Relación con el barbero
    servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE)  # Relación con el servicio
    fecha_hora = models.DateTimeField()  # Fecha y hora de la reserva
    pagado = models.BooleanField(default=False)  # Estado de pago

    def __str__(self):
        return f'Reserva de {self.cliente} con {self.barbero} para {self.servicio}'