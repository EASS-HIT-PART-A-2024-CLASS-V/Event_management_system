import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_home():
    response = client.get('api/hi')
    assert response.status_code == 200
    assert response.json() == {'message': 'Hello world'}

def test_read_users():
    response = client.get('api/users/')
    print (111111111111111111, response)
    assert response.status_code == 200
    assert isinstance(response.json(), list)

def test_read_user():
    user_id = 1
    response = client.get(f'/users/{user_id}')
    if response.status_code == 200:
        assert isinstance(response.json(), dict)
        assert '_id' in response.json()
        assert response.json()['_id'] == str(user_id)
    else:
        assert response.status_code == 404

def test_create_user():
    new_user = {   
        "username": "newusername",
        "email": "user@example.com",
        "password_hash": "newpassowrd",
        "name": "newname",
        "created_at": "2024-06-30T07:04:55.672Z"
    }
    response = client.post('api/users/', json=new_user)
    print(response.json())  # Added for debugging
    assert response.status_code == 200
    response_data = response.json()
    assert response_data['username'] == new_user['username']
    assert response_data['email'] == new_user['email']

def test_update_user():
    user_id = 1
    updated_user = {
        "_id": "1",
        "username": "newusername",
        "email": "user@example.com",
        "password_hash": "newpassowrd",
        "name": "newname",
        "created_at": "2024-06-30T07:04:55.672Z"
    }
    response = client.put(f'/users/{user_id}', json=updated_user)
    print(response.json())  # Added for debugging
    if response.status_code == 200:
        response_data = response.json()
        assert response_data['username'] == updated_user['username']
        assert response_data['email'] == updated_user['email']
    else:
        assert response.status_code == 404

def test_create_event():
    new_event = {
        "title": "newtitle",
        "description": "newdescription",
        "location": "newloaction",
        "start_time": "2024-06-30T07:09:35.330Z",
        "end_time": "2024-06-30T07:09:35.330Z",
        "created_by": "1",
        "is_open": True,
        "created_at": "2024-06-30T07:09:35.330Z"
    }
    response = client.post('api/events/create', json=new_event)
    print(response.json())  # Added for debugging
    assert response.status_code == 200
    response_data = response.json()
    assert response_data['title'] == new_event['title']
    assert response_data['description'] == new_event['description']

def test_update_event():
    event_id = 1
    updated_event = {
        "_id": "1",
        "title": "newtitle",
        "description": "newdescription",
        "location": "newloaction",
        "start_time": "2024-06-30T07:09:35.330Z",
        "end_time": "2024-06-30T07:09:35.330Z",
        "created_by": "1",
        "is_open": True,
        "created_at": "2024-06-30T07:09:35.330Z"
    }
    response = client.put(f'/events/{event_id}', json=updated_event)
    print(response.json())  # Added for debugging
    if response.status_code == 200:
        response_data = response.json()
        assert response_data['title'] == updated_event['title']
        assert response_data['description'] == updated_event['description']
    else:
        assert response.status_code == 404

def test_create_participant():
    new_participant = {
        "event_id": "1",
        "user_id": "1",
        "joined_at": "2024-06-30T07:11:45.624Z"
    }
    response = client.post('api/participants/', json=new_participant)
    print(response.json())  # Added for debugging
    assert response.status_code == 200
    response_data = response.json()
    assert response_data['event_id'] == new_participant['event_id']
    assert response_data['user_id'] == new_participant['user_id']

def test_update_participant():
    participant_id = 1
    updated_participant = {
        "_id": "1",
        "event_id": "1",
        "user_id": "1",
        "joined_at": "2024-06-30T07:11:45.624Z"
    }
    response = client.put(f'/participants/{participant_id}', json=updated_participant)
    print(response.json())  # Added for debugging
    if response.status_code == 200:
        response_data = response.json()
        assert response_data['event_id'] == updated_participant['event_id']
        assert response_data['user_id'] == updated_participant['user_id']
    else:
        assert response.status_code == 404

def test_create_invitation():
    new_invitation = {
        "event_id": "1",
        "inviter_id": "1",
        "invitee_id": "2",
        "status": "pending",
        "sent_at": "2024-06-30T07:12:39.600Z",
        "responded_at": "2024-06-30T07:12:39.600Z"
    }
    response = client.post('api/invitations/', json=new_invitation)
    print(response.json())  # Added for debugging
    assert response.status_code == 200
    response_data = response.json()
    assert response_data['event_id'] == new_invitation['event_id']
    assert response_data['invitee_id'] == new_invitation['invitee_id']
    assert response_data['inviter_id'] == new_invitation['inviter_id']

def test_update_invitation():
    invitation_id = 1
    updated_invitation = {
        "_id": "1",
        "event_id": "1",
        "inviter_id": "1",
        "invitee_id": "2",
        "status": "pending",
        "sent_at": "2024-06-30T07:12:39.600Z",
        "responded_at": "2024-06-30T07:12:39.600Z"
    }
    response = client.put(f'/invitations/{invitation_id}', json=updated_invitation)
    print(response.json())  # Added for debugging
    if response.status_code == 200:
        response_data = response.json()
        assert response_data['event_id'] == updated_invitation['event_id']
        assert response_data['invitee_id'] == updated_invitation['invitee_id']
        assert response_data['inviter_id'] == updated_invitation['inviter_id']
    else:
        assert response.status_code == 404
