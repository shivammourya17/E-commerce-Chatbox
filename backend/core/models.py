from django.db import models


# Model For Product Data
class Product(models.Model):
    title = models.CharField(max_length=255)
    brand = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    description = models.TextField()

    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    rating = models.FloatField()

    thumbnail = models.URLField(max_length=500)
    images = models.JSONField(default=list, blank=True)  # List of image URLs

    # Reviews stored as list of dicts: [{reviewer_name, reviewer_email, rating, comment}, ...]
    reviews = models.JSONField(default=list, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

# Model For Saving User Prompts
class PromptLog(models.Model):
    user_id = models.TextField()
    prompt = models.TextField()

    def __str__(self):
        return f'User {self.user_id}: {self.prompt[:50]}'