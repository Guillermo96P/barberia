from rest_framework import serializers
from .models import Barbero, Servicio, Reserva

class BarberoSerializer(serializers.ModelSerializer):
    # Serializer para el modelo de Barbero
    class Meta:
        model = Barbero # Indica el Modelo a usar
        fields = '__all__' # Incluye todos los campos del Modelo

class ServicioSerializer(serializers.ModelSerializer):
    #Serializer para el modelo de Servicios
    class Meta:
        model = Servicio # Indica el modelo a usar
        fields = '__all__' # Incluye todos los campos del Modelo

class ReservaSerializer(serializers.ModelSerializer):
    # Serializer para el modelo de Reserva
    class Meta:
        model = Reserva # Indica el Modelo a usar
        fields = '__all__' # Incluye todos los campos del Modelo