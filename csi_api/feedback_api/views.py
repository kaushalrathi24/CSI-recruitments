from rest_framework import viewsets
 

from .serializers import FeedbackSerializer
from .models import Feedback
 

class FeedbackViewSet(viewsets.ModelViewSet):
 
    queryset = Feedback.objects.all()
     
    # specify serializer to be used
    serializer_class = FeedbackSerializer