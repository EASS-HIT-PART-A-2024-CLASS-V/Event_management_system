from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
from bson import ObjectId
from pydantic import Field, ConfigDict

##############################################################
class User(BaseModel):
    id: Optional[str] = Field(alias="_id")
    username: str
    email: EmailStr
    password_hash: str
    name: Optional[str] = None
    created_at: Optional[datetime] = None

    class ConfigDict:
        populate_by_name = True
        json_encoders = {ObjectId: str}

##############################################################
class Event(BaseModel):
    id: Optional[str] = Field(alias="_id")
    title: str
    description: Optional[str] = None
    location: Optional[str] = None
    start_time: datetime
    end_time: datetime
    created_by: str  # This should be a reference to User ID
    is_open: bool = True
    created_at: Optional[datetime] = None

    class ConfigDict:
        populate_by_name = True
        json_encoders = {ObjectId: str}

##############################################################
class Participant(BaseModel):
    id: Optional[str] = Field(alias="_id")
    event_id: str  # This should be a reference to Event ID
    user_id: str  # This should be a reference to User ID
    joined_at: Optional[datetime] = None
        
    class ConfigDict:
        populate_by_name = True
        json_encoders = {ObjectId: str}

##############################################################
class Invitation(BaseModel):
    id: Optional[str] = Field(alias="_id")
    event_id: str  # This should be a reference to Event ID
    inviter_id: str  # This should be a reference to User ID
    invitee_id: str  # This should be a reference to User ID
    status: Optional[str] = "pending"  # "pending", "accepted", "declined"
    sent_at: Optional[datetime] = None
    responded_at: Optional[datetime] = None

    class ConfigDict:
        populate_by_name = True
        json_encoders = {ObjectId: str}
