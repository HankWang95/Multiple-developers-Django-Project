from django.contrib import admin
from .models import Series, Curriculum, Comment, KindOfSeries, CurriculumParticipation, UnauditedCurriculum
# Register your models here.

admin.site.register(Series)
admin.site.register(Curriculum)
admin.site.register(Comment)
admin.site.register(KindOfSeries)
admin.site.register(UnauditedCurriculum)
admin.site.register(CurriculumParticipation)
