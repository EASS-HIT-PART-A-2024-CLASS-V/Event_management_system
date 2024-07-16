from datetime import datetime
from typing import List, Optional

from schemas import User, Event, Participant, Invitation

##############################################################
users = [
    User(_id="1", username="alice", email="alice@example.com", password_hash="hashed_password"),
    User(_id="2", username="bob", email="bob@example.com", password_hash="hashed_password"),
    User(_id="3", username="charlie", email="charlie@example.com", password_hash="hashed_password"),
    User(_id="4", username="david", email="david@example.com", password_hash="hashed_password"),
    User(_id="5", username="emma", email="emma@example.com", password_hash="hashed_password"),
    User(_id="6", username="frank", email="frank@example.com", password_hash="hashed_password"),
    User(_id="7", username="grace", email="grace@example.com", password_hash="hashed_password"),
    User(_id="8", username="hannah", email="hannah@example.com", password_hash="hashed_password"),
    User(_id="9", username="ian", email="ian@example.com", password_hash="hashed_password"),
    User(_id="10", username="jane", email="jane@example.com", password_hash="hashed_password"),
]

##############################################################
events = [
    Event(_id="1", title="Conference 2024", description="Annual tech conference", 
          location="New York, NY", start_time=datetime(2024, 7, 1, 9, 0, 0),
          end_time=datetime(2024, 7, 1, 17, 0, 0), created_by="1"),
    Event(_id="2", title="Networking Mixer", description="Casual networking event", 
          location="San Francisco, CA", start_time=datetime(2024, 8, 15, 18, 0, 0),
          end_time=datetime(2024, 8, 15, 21, 0, 0), created_by="2"),
    Event(_id="3", title="Tech Meetup", description="Local tech meetup", 
          location="Seattle, WA", start_time=datetime(2024, 7, 10, 17, 0, 0),
          end_time=datetime(2024, 7, 10, 20, 0, 0), created_by="3"),
    Event(_id="4", title="Startup Pitch Day", description="Showcase for startup pitches", 
          location="Austin, TX", start_time=datetime(2024, 8, 5, 10, 0, 0),
          end_time=datetime(2024, 8, 5, 15, 0, 0), created_by="4"),
    Event(_id="5", title="Hackathon 2024", description="24-hour coding marathon", 
          location="Chicago, IL", start_time=datetime(2024, 9, 1, 12, 0, 0),
          end_time=datetime(2024, 9, 2, 12, 0, 0), created_by="5"),
    Event(_id="6", title="Panel Discussion", description="Industry expert panel discussion", 
          location="Los Angeles, CA", start_time=datetime(2024, 7, 20, 15, 0, 0),
          end_time=datetime(2024, 7, 20, 17, 0, 0), created_by="6"),
    Event(_id="7", title="Job Fair", description="Career fair for job seekers", 
          location="Boston, MA", start_time=datetime(2024, 8, 25, 11, 0, 0),
          end_time=datetime(2024, 8, 25, 16, 0, 0), created_by="7"),
    Event(_id="8", title="Webinar Series", description="Series of webinars on tech topics", 
          location="Denver, CO", start_time=datetime(2024, 7, 5, 14, 0, 0),
          end_time=datetime(2024, 7, 5, 16, 0, 0), created_by="8"),
    Event(_id="9", title="Community Workshop", description="Hands-on workshop for community", 
          location="Portland, OR", start_time=datetime(2024, 8, 10, 13, 0, 0),
          end_time=datetime(2024, 8, 10, 16, 0, 0), created_by="9"),
    Event(_id="10", title="Virtual Conference", description="Online conference for global participants", 
          location="Virtual", start_time=datetime(2024, 9, 15, 10, 0, 0),
          end_time=datetime(2024, 9, 15, 18, 0, 0), created_by="10"),
]

##############################################################
participants = [
    Participant(_id="1", event_id="1", user_id="2", joined_at=datetime(2024, 6, 1, 12, 0, 0)),
    Participant(_id="2", event_id="1", user_id="3", joined_at=datetime(2024, 6, 2, 10, 0, 0)),
    Participant(_id="3", event_id="2", user_id="4", joined_at=datetime(2024, 6, 3, 11, 0, 0)),
    Participant(_id="4", event_id="2", user_id="5", joined_at=datetime(2024, 6, 4, 9, 0, 0)),
    Participant(_id="5", event_id="3", user_id="6", joined_at=datetime(2024, 6, 5, 8, 0, 0)),
    Participant(_id="6", event_id="3", user_id="7", joined_at=datetime(2024, 6, 6, 14, 0, 0)),
    Participant(_id="7", event_id="4", user_id="8", joined_at=datetime(2024, 6, 7, 13, 0, 0)),
    Participant(_id="8", event_id="4", user_id="9", joined_at=datetime(2024, 6, 8, 15, 0, 0)),
    Participant(_id="9", event_id="5", user_id="10", joined_at=datetime(2024, 6, 9, 12, 0, 0)),
    Participant(_id="10", event_id="5", user_id="1", joined_at=datetime(2024, 6, 10, 10, 0, 0)),
]

##############################################################
invitations = [
    Invitation(_id="1", event_id="1", inviter_id="1", invitee_id="2", status="accepted",
               sent_at=datetime(2024, 5, 30, 9, 0, 0), responded_at=datetime(2024, 5, 31, 15, 0, 0)),
    Invitation(_id="2", event_id="1", inviter_id="1", invitee_id="3", status="pending",
               sent_at=datetime(2024, 5, 30, 9, 0, 0)),
    Invitation(_id="3", event_id="2", inviter_id="2", invitee_id="4", status="pending",
               sent_at=datetime(2024, 5, 31, 10, 0, 0)),
    Invitation(_id="4", event_id="2", inviter_id="2", invitee_id="5", status="pending",
               sent_at=datetime(2024, 5, 31, 11, 0, 0)),
    Invitation(_id="5", event_id="3", inviter_id="3", invitee_id="6", status="accepted",
               sent_at=datetime(2024, 6, 1, 14, 0, 0), responded_at=datetime(2024, 6, 2, 16, 0, 0)),
    Invitation(_id="6", event_id="3", inviter_id="3", invitee_id="7", status="pending",
               sent_at=datetime(2024, 6, 2, 9, 0, 0)),
    Invitation(_id="7", event_id="4", inviter_id="4", invitee_id="8", status="accepted",
               sent_at=datetime(2024, 6, 3, 13, 0, 0), responded_at=datetime(2024, 6, 4, 11, 0, 0)),
    Invitation(_id="8", event_id="4", inviter_id="4", invitee_id="9", status="pending",
               sent_at=datetime(2024, 6, 4, 10, 0, 0)),
    Invitation(_id="9", event_id="5", inviter_id="5", invitee_id="10", status="pending",
               sent_at=datetime(2024, 6, 5, 12, 0, 0)),
    Invitation(_id="10", event_id="5", inviter_id="5", invitee_id="1", status="pending",
    sent_at=datetime(2024, 6, 5, 14, 0, 0)),
]

#___FUNCTIONS____######################################################
###########___USERS___#################################################
def get_all_users() -> List[User]:
    return users

##############################################################
def get_user_by_id(user_id: str) -> Optional[User]:
    for user in users:
        if user.id == user_id:
            return user
    return None

##############################################################
def get_user_by_credentials(username: str, password: str):
    for user in users:
        if user.username == username and user.password_hash == password :
            return user.id
    return -1

##############################################################
def set_user(user_id: str, user_data: User) -> Optional[User]:
    for i, user in enumerate(users):
        if user.id == user_id:
            users[i] = user_data
            return users[i]
    return None

##############################################################
def add_user(user_data: User) -> User:
    users.append(user_data)
    return user_data

##############################################################
def deleted_user(user_id: str) -> bool:
    for i, user in enumerate(users):
        if user.id == user_id:
            del users[i]
            print(111111111111111111)
            return True
    
    return False

##########___EVENTS___########################################
def get_all_events() -> List[Event]:
    return events

##############################################################
def get_event_by_id(event_id: str) -> Optional[Event]:
    for event in events:
        if event.id == event_id:
            return event
    return None

##############################################################
def get_events_by_user_id(user_id: str) -> List[Event]:
    user_events = []
    for participant in participants:
        if participant.user_id == user_id:
            event = next((e for e in events if e.id == participant.event_id), None)
            if event:
                user_events.append(event)
    return user_events

##############################################################
def set_event(event_id: str, event_data: Event) -> Optional[Event]:
    for i, event in enumerate(events):
        if event.id == event_id:
            events[i] = event_data
            return events[i]
    return None

##############################################################
def add_event(event_data: Event) -> Event:
    event_data.created_at = datetime.now() 
    events.append(event_data)
    return event_data

##############################################################
def delete_event(event_id: str) -> bool:
    for i, event in enumerate(events):
        if event.id == event_id:
            del events[i]
            return True
    
    return False

#########____PARTICIPANTS___##################################
def get_all_participants() -> List[Participant]:
    return participants

##############################################################
def get_participant_by_id(participant_id: str) -> Optional[Participant]:
    for participant in participants:
        if participant.id == participant_id:
            return participant
    return None

##############################################################
def set_participant(participant_id: str, participant_data: Participant) -> Optional[Participant]:
    for i, participant in enumerate(participants):
        if participant.id == participant_id:
            participants[i] = participant_data
            return participants[i]
    return None

##############################################################
def add_participant(participant_data: Participant) -> Participant:
    participant_data.joined_at = datetime.now()
    participants.append(participant_data)
    return participant_data

##############################################################
def delete_participant(participant_id: str) -> bool:
    for i, participant in enumerate(participants):
        if participant._id == participant_id:
            del participants[i]
            return True
    
    return False

########_____INVITATIONS____##################################
def get_all_invitations() -> List[Invitation]:
    return invitations

##############################################################
def get_invitation_by_id(invitation_id: str) -> Optional[Invitation]:
    for invitation in invitations:
        if invitation.id == invitation_id:
            return invitation
    return None

##############################################################
def set_invitation(invitation_id: str, invitation_data: Invitation) -> Optional[Invitation]:
    for i, invitation in enumerate(invitations):
        if invitation.id == invitation_id:
            invitations[i] = invitation_data
            return invitations[i]
    return None

##############################################################
def add_invitation(invitation_data: Invitation) -> Invitation:
    invitation_data.sent_at = datetime.now()
    invitations.append(invitation_data)
    return invitation_data

##############################################################
def delete_invitation(invitation_id: str) -> bool:
    for i, invitation in enumerate(invitations):
        if invitation.id == invitation_id:
            del invitations[i]
            return True
    
    return False

##############################################################

