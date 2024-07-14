from typing import List
from fastapi import FastAPI, HTTPException
from schemas import User, Event, Participant, Invitation
from mock_db import (
    get_all_users, get_user_by_id, set_user, add_user, delete_user,
    get_all_events, get_event_by_id, set_event, add_event, delete_event,
    get_all_participants, get_participant_by_id, set_participant, add_participant, delete_participant,
    get_all_invitations, get_invitation_by_id, set_invitation, add_invitation, delete_invitation
)
from pymongo import MongoClient

username = 'admin'
password = 'admin_password'
host = 'localhost'  # Replace with your MongoDB host
port = 27017  # Replace with your MongoDB port
database_name = 'ems_database'

# Construct the MongoDB URI
mongoUri = f'mongodb://{username}:{password}@{host}:{port}/{database_name}'
print (mongoUri)

try:
    # Connect to MongoDB
    client = MongoClient(mongoUri)
    db = client[database_name]

    # Test the connection by printing the list of collections
    print(db.list_collection_names())

except Exception as e:
    print(f"Error connecting to MongoDB: {e}")
    
# Replace with your MongoDB connection string (assuming it's running on localhost on default port)
client = MongoClient(mongoUri)

# Access the database (replace 'mydatabase' with your actual database name)
db = client['ems_database']

# Example query to retrieve data from a collection (replace 'users' with your actual collection name)
users_collection = db['users']
results = users_collection.find({})

# Iterate over the results
print(1.0,results)
for result in results:
    print(result)
print(1.1)

app = FastAPI()

####################################################################################
@app.get('/')
async def home():
    return {'message': 'Hello world'}

####################################################################################
@app.get('/users/', response_model=List[User])
async def read_users():
    return get_all_users()

####################################################################################
@app.get('/users/{user_id}', response_model=User)
async def read_user(user_id: str):
    user = get_user_by_id(user_id)
    if user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return user

####################################################################################
@app.post('/users/', response_model=User)
async def create_user(user: User):
    return add_user(user)

####################################################################################
@app.put('/users/{user_id}', response_model=User)
async def update_user(user_id: str, user: User):
    updated_user = set_user(user_id, user)
    if updated_user is None:
        raise HTTPException(status_code=404, detail="User not found")
    return updated_user

####################################################################################
@app.delete('/users/{user_id}', response_model=bool)
async def delete_user(user_id: str):
    if not delete_user(user_id):
        raise HTTPException(status_code=404, detail="User not found")
    return True

####################################################################################
@app.get('/events/', response_model=List[Event])
async def read_events():
    return get_all_events()

####################################################################################
@app.get('/events/{event_id}', response_model=Event)
async def read_event(event_id: str):
    event = get_event_by_id(event_id)
    if event is None:
        raise HTTPException(status_code=404, detail="Event not found")
    return event

####################################################################################
@app.post('/events/', response_model=Event)
async def create_event(event: Event):
    return add_event(event)

####################################################################################
@app.put('/events/{event_id}', response_model=Event)
async def update_event(event_id: str, event: Event):
    updated_event = set_event(event_id, event)
    if updated_event is None:
        raise HTTPException(status_code=404, detail="Event not found")
    return updated_event

####################################################################################
@app.delete('/events/{event_id}', response_model=bool)
async def delete_event(event_id: str):
    if not delete_event(event_id):
        raise HTTPException(status_code=404, detail="Event not found")
    return True

####################################################################################
@app.get('/participants/', response_model=List[Participant])
async def read_participants():
    return get_all_participants()

####################################################################################
@app.get('/participants/{participant_id}', response_model=Participant)
async def read_participant(participant_id: str):
    participant = get_participant_by_id(participant_id)
    if participant is None:
        raise HTTPException(status_code=404, detail="Participant not found")
    return participant

####################################################################################
@app.post('/participants/', response_model=Participant)
async def create_participant(participant: Participant):
    return add_participant(participant)

####################################################################################
@app.put('/participants/{participant_id}', response_model=Participant)
async def update_participant(participant_id: str, participant: Participant):
    updated_participant = set_participant(participant_id, participant)
    if updated_participant is None:
        raise HTTPException(status_code=404, detail="Participant not found")
    return updated_participant

####################################################################################
@app.delete('/participants/{participant_id}', response_model=bool)
async def delete_participant(participant_id: str):
    if not delete_participant(participant_id):
        raise HTTPException(status_code=404, detail="Participant not found")
    return True

####################################################################################
@app.get('/invitations/', response_model=List[Invitation])
async def read_invitations():
    return get_all_invitations()

####################################################################################
@app.get('/invitations/{invitation_id}', response_model=Invitation)
async def read_invitation(invitation_id: str):
    invitation = get_invitation_by_id(invitation_id)
    if invitation is None:
        raise HTTPException(status_code=404, detail="Invitation not found")
    return invitation

####################################################################################
@app.post('/invitations/', response_model=Invitation)
async def create_invitation(invitation: Invitation):
    return add_invitation(invitation)

####################################################################################
@app.put('/invitations/{invitation_id}', response_model=Invitation)
async def update_invitation(invitation_id: str, invitation: Invitation):
    updated_invitation = set_invitation(invitation_id, invitation)
    if updated_invitation is None:
        raise HTTPException(status_code=404, detail="Invitation not found")
    return updated_invitation

####################################################################################
@app.delete('/invitations/{invitation_id}', response_model=bool)
async def delete_invitation(invitation_id: str):
    if not delete_invitation(invitation_id):
        raise HTTPException(status_code=404, detail="Invitation not found")
    return True
