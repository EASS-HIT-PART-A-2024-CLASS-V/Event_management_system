from datetime import datetime
from typing import List, Optional

from schemas import User, Event, Participant, Invitation

from pymongo import MongoClient

# MongoDB connection
username = 'admin'
password = 'admin_password'
host = 'localhost'
port = 27018
database_name = 'ems_database'
mongoUri = f'mongodb://{username}:{password}@{host}:{port}'

client = MongoClient(mongoUri)
db = client[database_name]

# Collections
users_collection = db['users']
events_collection = db['events']
participants_collection = db['participants']
invitations_collection = db['invitations']

# Helper functions
def serialize_user(user: User) -> dict:
    return user.dict()

def deserialize_user(data: dict) -> User:
    return User(**data)

def serialize_event(event: Event) -> dict:
    return event.dict()

def deserialize_event(data: dict) -> Event:
    return Event(**data)

def serialize_participant(participant: Participant) -> dict:
    return participant.dict()

def deserialize_participant(data: dict) -> Participant:
    return Participant(**data)

def serialize_invitation(invitation: Invitation) -> dict:
    return invitation.dict()

def deserialize_invitation(data: dict) -> Invitation:
    return Invitation(**data)

# User functions
def get_all_users() -> List[User]:
    users = users_collection.find()
    return [deserialize_user(user) for user in users]

def get_user_by_id(user_id: str) -> Optional[User]:
    user = users_collection.find_one({"_id": user_id})
    return deserialize_user(user) if user else None

def get_user_by_credentials(username: str, password: str) -> str:
    user = users_collection.find_one({"username": username, "password_hash": password})
    return user["_id"] if user else -1

def set_user(user_id: str, user_data: User) -> Optional[User]:
    result = users_collection.replace_one({"_id": user_id}, serialize_user(user_data))
    return user_data if result.modified_count > 0 else None

def add_user(user_data: User) -> User:
    users_collection.insert_one(serialize_user(user_data))
    return user_data

def deleted_user(user_id: str) -> bool:
    result = users_collection.delete_one({"_id": user_id})
    return result.deleted_count > 0

# Event functions
def get_all_events() -> List[Event]:
    events = events_collection.find()
    return [deserialize_event(event) for event in events]

def get_event_by_id(event_id: str) -> Optional[Event]:
    event = events_collection.find_one({"_id": event_id})
    return deserialize_event(event) if event else None

def get_events_by_user_id(user_id: str) -> List[Event]:
    events = events_collection.find({"created_by": user_id})
    return [deserialize_event(event) for event in events]

def set_event(event_id: str, event_data: Event) -> Optional[Event]:
    result = events_collection.replace_one({"_id": event_id}, serialize_event(event_data))
    return event_data if result.modified_count > 0 else None

def add_event(event_data: Event) -> Event:
    event_data.created_at = datetime.now()
    events_collection.insert_one(serialize_event(event_data))
    return event_data

def deleted_event(event_id: str) -> bool:
    result = events_collection.delete_one({"_id": event_id})
    return result.deleted_count > 0

# Participant functions
def get_all_participants() -> List[Participant]:
    participants = participants_collection.find()
    return [deserialize_participant(participant) for participant in participants]

def get_participant_by_id(participant_id: str) -> Optional[Participant]:
    participant = participants_collection.find_one({"_id": participant_id})
    return deserialize_participant(participant) if participant else None

def set_participant(participant_id: str, participant_data: Participant) -> Optional[Participant]:
    result = participants_collection.replace_one({"_id": participant_id}, serialize_participant(participant_data))
    return participant_data if result.modified_count > 0 else None

def add_participant(participant_data: Participant) -> Participant:
    participant_data.joined_at = datetime.now()
    participants_collection.insert_one(serialize_participant(participant_data))
    return participant_data

def deleted_participant(participant_id: str) -> bool:
    result = participants_collection.delete_one({"_id": participant_id})
    return result.deleted_count > 0

# Invitation functions
def get_all_invitations() -> List[Invitation]:
    invitations = invitations_collection.find()
    return [deserialize_invitation(invitation) for invitation in invitations]

def get_invitation_by_id(invitation_id: str) -> Optional[Invitation]:
    invitation = invitations_collection.find_one({"_id": invitation_id})
    return deserialize_invitation(invitation) if invitation else None

def set_invitation(invitation_id: str, invitation_data: Invitation) -> Optional[Invitation]:
    result = invitations_collection.replace_one({"_id": invitation_id}, serialize_invitation(invitation_data))
    return invitation_data if result.modified_count > 0 else None

def add_invitation(invitation_data: Invitation) -> Invitation:
    invitation_data.sent_at = datetime.now()
    invitations_collection.insert_one(serialize_invitation(invitation_data))
    return invitation_data

def deleted_invitation(invitation_id: str) -> bool:
    result = invitations_collection.delete_one({"_id": invitation_id})
    return result.deleted_count > 0
