from pickle import LIST
import string
from typing import List
from fastapi import FastAPI, HTTPException
from schemas import User, Event, Participant, Invitation ,AuthRequest
from datetime import datetime
from mock_db import (
    get_all_users, get_user_by_id,get_user_by_credentials, set_user, add_user, deleted_user,
    get_all_events, get_event_by_id,get_events_by_user_id, set_event, add_event, deleted_event,
    get_all_participants, get_participant_by_id, set_participant, add_participant, deleted_participant,
    get_all_invitations, get_invitation_by_id, set_invitation, add_invitation, deleted_invitation
)
from pymongo import MongoClient

####################################################################################
if False:
    username = 'admin'
    password = 'admin_password'
    host = 'localhost'  
    port = 27018  
    database_name = 'ems_database'
    
    mongoUri = f'mongodb://{username}:{password}@{host}:{port}/{database_name}'
    print ("mongoUri:", mongoUri)

    client = MongoClient(mongoUri)

    db = client['ems_database']

    print(0)
    print(db.list_collection_names())
    print(0.1)

    users_collection = db['users']
    results = users_collection.find({})

    print(1.0,results)
    for result in results:
        print(result)
    print(1.1)

####################################################################################
app = FastAPI()

####################################################################################
@app.get('/api/hi')
async def home():
    return {'message': 'Hello world'}

####################################################################################
@app.get('/api/users/', response_model=List[User])
async def read_users():
    return get_all_users()

####################################################################################
@app.get('/api/users/{user_id}', response_model=User)
async def read_user(user_id: str):
    user = get_user_by_id(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

####################################################################################
@app.post('/api/users/auth')
async def read_user(auth_request: AuthRequest):
    user = get_user_by_credentials(auth_request.username, auth_request.password)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

####################################################################################
@app.post('/api/users/', response_model=User)
async def create_user(user: User):
    user.created_at = datetime.now() 
    return add_user(user)

####################################################################################
@app.put('/api/users/{user_id}', response_model=User)
async def update_user(user_id: str, user: User):
    updated_user = set_user(user_id, user)
    if updated_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return updated_user

####################################################################################
@app.delete('/api/users/delete/{user_id}', response_model=bool)
async def delete_user(user_id: str):
    print("entered delete")
    if not deleted_user(user_id):
        raise HTTPException(status_code=404, detail="User not found")
    return True

####################################################################################
@app.get('/api/events/', response_model=List[Event])
async def read_events():
    return get_all_events()

####################################################################################
@app.get('/api/events/{event_id}', response_model=Event)
async def read_event(event_id: str):
    event = get_event_by_id(event_id)
    if event is None:
        raise HTTPException(status_code=404, detail="Event not found")
    return event

####################################################################################
@app.get('/api/events_by_user/{user_id}', response_model=List[Event])
async def read_event_by_user(user_id: str):
    event = get_events_by_user_id(user_id)
    if event is None:
        return []
     
    return event

####################################################################################
@app.post('/api/events/', response_model=Event)
async def create_event(event: Event):
    return add_event(event)

####################################################################################
@app.put('/api/events/{event_id}', response_model=Event)
async def update_event(event_id: str, event: Event):
    updated_event = set_event(event_id, event)
    if updated_event is None:
        raise HTTPException(status_code=404, detail="Event not found")
    return updated_event

####################################################################################
@app.delete('/api/events/{event_id}', response_model=bool)
async def delete_event(event_id: str):
    if not deleted_event(event_id):
        raise HTTPException(status_code=404, detail="Event not found")
    return True

####################################################################################
@app.get('/api/participants/', response_model=List[Participant])
async def read_participants():
    return get_all_participants()

####################################################################################
@app.get('/api/participants/{participant_id}', response_model=Participant)
async def read_participant(participant_id: str):
    participant = get_participant_by_id(participant_id)
    if participant is None:
        raise HTTPException(status_code=404, detail="Participant not found")
    return participant

####################################################################################
@app.post('/api/participants/', response_model=Participant)
async def create_participant(participant: Participant):
    return add_participant(participant)

####################################################################################
@app.put('/api/participants/{participant_id}', response_model=Participant)
async def update_participant(participant_id: str, participant: Participant):
    updated_participant = set_participant(participant_id, participant)
    if updated_participant is None:
        raise HTTPException(status_code=404, detail="Participant not found")
    return updated_participant

####################################################################################
@app.delete('/api/participants/{participant_id}', response_model=bool)
async def delete_participant(participant_id: str):
    if not deleted_participant(participant_id):
        raise HTTPException(status_code=404, detail="Participant not found")
    return True

####################################################################################
@app.get('/api/invitations/', response_model=List[Invitation])
async def read_invitations():
    return get_all_invitations()

####################################################################################
@app.get('/api/invitations/{invitation_id}', response_model=Invitation)
async def read_invitation(invitation_id: str):
    invitation = get_invitation_by_id(invitation_id)
    if invitation is None:
        raise HTTPException(status_code=404, detail="Invitation not found")
    return invitation

####################################################################################
@app.post('/api/invitations/', response_model=Invitation)
async def create_invitation(invitation: Invitation):
    return add_invitation(invitation)

####################################################################################
@app.put('/api/invitations/{invitation_id}', response_model=Invitation)
async def update_invitation(invitation_id: str, invitation: Invitation):
    updated_invitation = set_invitation(invitation_id, invitation)
    if updated_invitation is None:
        raise HTTPException(status_code=404, detail="Invitation not found")
    return updated_invitation

####################################################################################
@app.delete('/api/invitations/{invitation_id}', response_model=bool)
async def delete_invitation(invitation_id: str):
    if not deleted_invitation(invitation_id):
        raise HTTPException(status_code=404, detail="Invitation not found")
    return True
