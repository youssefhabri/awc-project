from django.contrib.auth.models import User as UserModel, Group as GroupModel
from graphene_django.rest_framework.mutation import SerializerMutation
import graphene

from quickstart.serializers import UserSerializer, GroupSerializer


class User(SerializerMutation):
    class Meta:
        serializer_class = UserSerializer


class Group(SerializerMutation):
    class Meta:
        serializer_class = GroupSerializer


class Query(graphene.ObjectType):
    users = graphene.List(User)
    groups = graphene.List(Group)

    def resolve_users(self, info):
        return UserModel.objects.all()

    def resolve_fullname(self, info):
        return 'Full name'

    def resolve_groups(self, info):
        return GroupModel.objects.all()


schema = graphene.Schema(query=Query)
