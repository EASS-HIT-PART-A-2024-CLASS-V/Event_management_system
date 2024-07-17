from pydantic import BaseModel, EmailStr, Field, ConfigDict
from typing import Optional
from datetime import datetime
from bson import ObjectId

##############################################################
class User(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(ObjectId()), alias="_id")
    username: str
    email: EmailStr
    password_hash: str
    name: Optional[str] = None
    created_at: Optional[datetime] = None

    class ConfigDict:
        populate_by_name  = True
        json_encoders = {ObjectId: str}

    @classmethod
    def from_dict(cls, data: dict):
        # Convert ObjectId to str for _id field
        if '_id' in data and isinstance(data['_id'], ObjectId):
            data['_id'] = str(data['_id'])
        # Convert datetime strings to datetime objects
        for field in ['created_at']:
            if field in data and isinstance(data[field], str):
                data[field] = datetime.fromisoformat(data[field])
        return cls(**data)


##############################################################
class Event(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(ObjectId()), alias="_id")
    title: str
    description: Optional[str] = None
    location: Optional[str] = None
    start_time: datetime
    end_time: datetime
    created_by: str  # This should be a reference to User ID
    is_open: bool = True
    created_at: Optional[datetime] = None

    class ConfigDict:
        populate_by_name  = True
        json_encoders = {ObjectId: str}

    @classmethod
    def from_dict(cls, data: dict):
        # Convert ObjectId to str for _id field
        if '_id' in data and isinstance(data['_id'], ObjectId):
            data['_id'] = str(data['_id'])
        # Convert datetime strings to datetime objects
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
        # Convert ObjectId to str for _id field
        data['_id'] = str(data.get('_id'))
        # Convert datetime strings to datetime objects
        if isinstance(data.get('joined_at'), str):
            data['joined_at'] = datetime.fromisoformat(data['joined_at'])
        return cls(**data)

##############################################################
class Invitation(BaseModel):
    id: Optional[str] = Field(default_factory=lambda: str(ObjectId()), alias="_id")
    event_id: str  # This should be a reference to Event ID
    inviter_id: str  # This should be a reference to User ID
    invitee_id: str  # This should be a reference to User ID
    status: Optional[str] = "pending"  # "pending", "accepted", "declined"
    sent_at: Optional[datetime] = None
    responded_at: Optional[datetime] = None

    class ConfigDict:
        populate_by_name  = True
        json_encoders = {ObjectId: str}

    @classmethod
    def from_dict(cls, data: dict):
        # Convert ObjectId to str for _id field
        data['_id'] = str(data.get('_id'))
        # Convert datetime strings to datetime objects
        if isinstance(data.get('sent_at'), str):
            data['sent_at'] = datetime.fromisoformat(data['sent_at'])
        if isinstance(data.get('responded_at'), str):
            data['responded_at'] = datetime.fromisoformat(data['responded_at'])
        return cls(**data)

##############################################################
class AuthRequest(BaseModel):
    username: str
    password: str
