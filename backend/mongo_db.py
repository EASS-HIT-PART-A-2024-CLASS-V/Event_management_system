from datetime import datetime
from typing import List, Optional
from bson import ObjectId

from schemas import User, Event, Participant, Invitation

from pymongo import MongoClient

#############################################################################
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

if False: #is turned on once there is too much data for development
    users_collection.delete_many({})
    events_collection.delete_many({})
    participants_collection.delete_many({})
    invitations_collection.delete_many({})

#############################################################################
# Helper functions
def serialize_user(user: User) -> dict:
    return user.model_dump()

def deserialize_user(data: dict) -> User:
    data =  User.from_dict(data)
    return data

def serialize_event(event: Event) -> dict:
    return event.model_dump()

def deserialize_event(data: dict) -> Event:
    return Event.from_dict(data)

def serialize_participant(participant: Participant) -> dict:
    return participant.model_dump()

def deserialize_participant(data: dict) -> Participant:
    return Participant.from_dict(data)

def serialize_invitation(invitation: Invitation) -> dict:
    return invitation.model_dump()

def deserialize_invitation(data: dict) -> Invitation:
    return Invitation.from_dict(data)

#############################################################################
# User functions
def get_all_users() -> List[User]:
    users = users_collection.find({})
    if users is None:
        return [];
    return [deserialize_user(user) for user in users]

#############################################################################
def get_user_by_id(user_id: str) -> Optional[User]:
    object_id = ObjectId(user_id)
    user = users_collection.find_one({"_id": object_id})
    if user is None:
        return '-1'
    return deserialize_user(user)

#############################################################################
def get_user_by_credentials(username: str, password: str) -> str:
    user = users_collection.find_one({"username": username, "password_hash": password})
    if user is None:
       return '-1'
    
    return deserialize_user(user).id

#############################################################################
def set_user(user_id: str, user_data: User) -> Optional[User]:
    object_id = ObjectId(user_id)
    result = users_collection.replace_one({"_id": object_id}, serialize_user(user_data))
    return user_data if result.modified_count > 0 else None

#############################################################################
def add_user(user_data: User) -> User:
    users_collection.insert_one(serialize_user(user_data))
    return user_data

#############################################################################
def deleted_user(user_id: str) -> bool:
    result = users_collection.delete_one({"_id": user_id})
    return result.deleted_count > 0

#############################################################################
# Event functions
def get_all_events() -> List[Event]:
    events = events_collection.find({})
    if events is None:
        return [];
    return [deserialize_event(event) for event in events]

#############################################################################
def get_event_by_id(event_id: str) -> Optional[Event]:
    events = events_collection.find({})
    for event in events:
        ret = deserialize_event(event)
        if ret.id == event_id:
            return ret;
    return None;

#############################################################################
def get_events_by_user_id(user_id: str) -> List[Event]:
     events = events_collection.find({"created_by": user_id})
     if events is None:
         return [];
     return [deserialize_event(event) for event in events]

#############################################################################
def set_event(event_id: str, event_data: Event) -> Optional[Event]:
    try:
        object_id = ObjectId(event_id)
    except Exception as e:
        print(f"Invalid ObjectId format: {e}")
        return None
    result = events_collection.replace_one({"_id": object_id}, serialize_event(event_data))
    
    if result.modified_count > 0:
        print("Event updated successfully.")
        return event_data
    else:
        print("Event not found or not modified.")
        return None
    
#############################################################################
def add_event(event_data: Event) -> Event:
    event_data.created_at = datetime.now()
    events_collection.insert_one(serialize_event(event_data))
    return event_data

#############################################################################
def deleted_event(event_id: str) -> bool:
    result = events_collection.delete_one({"_id": event_id})
    return result.deleted_count > 0

#############################################################################
# Participant functions
def get_all_participants() -> List[Participant]:
    participants = participants_collection.find({})
    if participants is None:
        return [];
    return [deserialize_participant(participant) for participant in participants]

#############################################################################
def get_participant_by_id(participant_id: str) -> Optional[Participant]:
    participant = participants_collection.find_one({"_id": participant_id})
    if participant is None:
        return None;
    return deserialize_participant(participant)

#############################################################################
def set_participant(participant_id: str, participant_data: Participant) -> Optional[Participant]:
    result = participants_collection.replace_one({"_id": participant_id}, serialize_participant(participant_data))
    return participant_data if result.modified_count > 0 else None

#############################################################################
def add_participant(participant_data: Participant) -> Participant:
    participant_data.joined_at = datetime.now()
    participants_collection.insert_one(serialize_participant(participant_data))
    return participant_data

#############################################################################
def deleted_participant(participant_id: str) -> bool:
    result = participants_collection.delete_one({"_id": participant_id})
    return result.deleted_count > 0

#############################################################################
# Invitation functions
def get_all_invitations() -> List[Invitation]:
    invitations = invitations_collection.find({})
    if invitations is None:
        return [];
    return [deserialize_invitation(invitation) for invitation in invitations]

#############################################################################
def get_invitation_by_id(invitation_id: str) -> Optional[Invitation]:
    invitation = invitations_collection.find_one({"_id": invitation_id})
    if invitation is None:
        return None;
    return deserialize_invitation(invitation)

#############################################################################
def set_invitation(invitation_id: str, invitation_data: Invitation) -> Optional[Invitation]:
    result = invitations_collection.replace_one({"_id": invitation_id}, serialize_invitation(invitation_data))
    return invitation_data if result.modified_count > 0 else None

#############################################################################
def add_invitation(invitation_data: Invitation) -> Invitation:
    invitation_data.sent_at = datetime.now()
    invitations_collection.insert_one(serialize_invitation(invitation_data))
    return invitation_data

#############################################################################
def deleted_invitation(invitation_id: str) -> bool:
    result = invitations_collection.delete_one({"_id": invitation_id})
    return result.deleted_count > 0
