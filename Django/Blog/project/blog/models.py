
from django.db import models
from django.urls import reverse

# Create your models here.
class Post(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(max_length=255,unique = True)
    summary = models.CharField(max_length = 300)
    content = models.TextField()
    published = models.BooleanField(default=True)
    created = models.DateField(auto_now_add=True)
    def _str_(self):
            return u'%s'%self.title

    class Meta:
        ordering = ['-created']
        

    def get_absolute_url(self):
        return reverse('blog.views.post', args=[self.slug])

       
