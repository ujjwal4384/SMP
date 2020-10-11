from rest_framework import serializers
from .models import *


class MentorGETSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentor
        fields = ['name', 'branch', 'year', 'photo', 'interest',
                  'mentor_intern', 'mentor_placement', 'mentor_achievement']


class MentorPOSTSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentor
        fields = "__all__"


class MentorAchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorAchievement
        fields = "__all__"


class MentorInternSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorIntern
        fields = "__all__"


class MentorPlacementSerializer(serializers.ModelSerializer):
    class Meta:
        model = MentorPlacement
        fields = "__all__"


class InterestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interest
        fields = "__all__"
