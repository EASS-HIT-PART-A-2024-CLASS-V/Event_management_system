from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import Optional
from datetime import datetime
from bson import ObjectId

##############################################################
class User(BaseModel):
    id: Optional[str] = ""
    username: str
    email: EmailStr
    password_hash: str
    name: Optional[str] = ""
    created_at: Optional[datetime] = ""

    class ConfigDict:
        populate_by_name  = True
        json_encoders = {ObjectId: str}

    @classmethod
    def from_dict(cls, data: dict):
        # Convert _id to id if present
        if '_id' in data:
            data['id'] = str(data['_id'])
            del data['_id']
        
        # Convert created_at from string to datetime if present
        if 'created_at' in data and isinstance(data['created_at'], str):
            data['created_at'] = datetime.fromisoformat(data['created_at'])

        return cls(**data)

##############################################################
class Event(BaseModel):
    id: Optional[str] = ""
    title: str
    description: Optional[str] = ""
    location: Optional[str] = ""
    start_time: datetime
    end_time: datetime
    created_by: str  # This should be a reference to User ID
    is_open: bool = True
    created_at: Optional[datetime] = 0

    class ConfigDict:
        populate_by_name  = True
        json_encoders = {ObjectId: str}

    @classmethod
    def from_dict(cls, data: dict):
        if '_id' in data:
            data['id'] = str(data['_id'])
            del data['_id']
            
        for field in ['start_time', 'end_time', 'created_at']:
            if field in data and isinstance(data[field], str):
                data[field] = datetime.fromisoformat(data[field])
        return cls(**data)


##############################################################
class Participant(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(ObjectId()), alias="_id")
    event_id: str  # This should be a reference to Event ID
    user_id: str  # This should be a reference to User ID
    joined_at: Optional[datetime] = None
        
    class ConfigDict:
        populate_by_name  = True
        json_encoders = {ObjectId: str}

    @classmethod
    def from_dict(cls, data: dict):
        if '_id' in data:
            data['id'] = str(data['_id'])
            del data['_id']
            
        if isinstance(data.get('joined_at'), str):
            data['joined_at'] = datetime.fromisoformat(data['joined_at'])
        return cls(**data)

##############################################################
class Invitation(BaseModel):
    id: Optional[str] = ""
    event_id: str  = "" # This should be a reference to Event ID
    inviter_id: str  = "" # This should be a reference to User ID
    invitee_id: str  = "" # This should be a reference to User ID
    status: Optional[str] = "pending"  # "pending", "accepted", "declined"
    sent_at: Optional[datetime] = 0
    responded_at: Optional[datetime] = 0

    class ConfigDict:
        populate_by_name  = True
        json_encoders = {ObjectId: str}

    @classmethod
    def from_dict(cls, data: dict):
        if '_id' in data:
            data['id'] = str(data['_id'])
            del data['_id']
            
        if isinstance(data.get('sent_at'), str):
            data['sent_at'] = datetime.fromisoformat(data['sent_at'])
        if isinstance(data.get('responded_at'), str):
            data['responded_at'] = datetime.fromisoformat(data['responded_at'])
        return cls(**data)

##############################################################
class AuthRequest(BaseModel):
    username: str
    password: str
