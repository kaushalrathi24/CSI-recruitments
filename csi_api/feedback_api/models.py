from django.db import models

class Feedback(models.Model):
    user = models.CharField(max_length=40)
    feedback_given = models.CharField(max_length=500)

    def __str__(self):
        return self.feedback_given
