from django import forms
from .models import Barbero

class BarberoForm(forms.ModelForm):
    class Meta:
        model = Barbero
        fields = ['nombre', 'especialidad', 'disponibilidad', 'imagen']