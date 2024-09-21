import stripe
from django.conf import settings
from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import AllowAny
from .models import Barbero, Servicio, Reserva
from .serializers import BarberoSerializer, ServicioSerializer, ReservaSerializer

# Configuración de Stripe (clave secreta)
stripe.api_key = settings.STRIPE_SECRET_KEY

# Registro de usuarios
@api_view(['POST'])
def register(request):
    """
    Registro de un nuevo usuario.
    """
    username = request.data.get('username')
    password = request.data.get('password')
    
    if not username or not password:
        return Response({"error": "El nombre de usuario y contraseña son requeridos."}, status=status.HTTP_400_BAD_REQUEST)
    
    # Crear un nuevo usuario
    user = User.objects.create_user(username=username, password=password)
    refresh = RefreshToken.for_user(user)  # Crear tokens JWT
    return Response({
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }, status=status.HTTP_201_CREATED)

# Inicio de sesión
@api_view(['POST'])
def login(request):
    """
    Inicio de Sesión
    """
    username = request.data.get('username')
    password = request.data.get('password')
    
    # Buscar usuario por nombre de usuario
    user = User.objects.filter(username=username).first()

    if user and user.check_password(password):
        refresh = RefreshToken.for_user(user)  # Generar JWT si las credenciales son correctas
        return Response({
            'refresh': str(refresh),
            'access': str(refresh.access_token),
        })
    else:
        return Response({'error': "Credenciales inválidas."}, status=status.HTTP_400_BAD_REQUEST)

# Listar Barberos
class BarberoListView(generics.ListAPIView):
    """
    Vista para listar todos los barberos.
    """
    queryset = Barbero.objects.all()
    serializer_class = BarberoSerializer

# Listar Servicios
class ServicioListView(generics.ListAPIView):
    """
    Vista para listar todos los servicios disponibles.
    """
    queryset = Servicio.objects.all()
    serializer_class = ServicioSerializer

# Crear y listar Reservas
class ReservasView(generics.ListCreateAPIView):
    """
    Vista para listar y crear reservas.
    """
    queryset = Reserva.objects.all()
    serializer_class = ReservaSerializer

    def post(self, request, *args, **kwargs):
        """
        Crear una nueva reserva y procesar el pago.
        """
        # Validar y guardar la reserva
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        reserva = serializer.save()

        # Procesar el pago con Stripe
        try:
            charge = stripe.Charge.create(
                amount=int(reserva.servicio.precio * 100),  # El monto en centavos
                currency='usd',  # La moneda en la que se procesa el pago
                description='Pago por servicios de Barbería',
                source=request.data['stripeToken']  # El token de Stripe proveniente del frontend
            )
            reserva.pagado = True  # Marca la reserva como pagada si el cargo fue exitoso
            reserva.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        except stripe.error.CardError as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)
