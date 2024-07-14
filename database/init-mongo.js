// MongoDB initialization script

// Create references to collections
const usersCollection = db.getCollection("users");
const eventsCollection = db.getCollection("events");
const participantsCollection = db.getCollection("participants");
const invitationsCollection = db.getCollection("invitations");

// Create users
const users = [
    {
        _id: ObjectId(),  // Replace with actual ObjectIds
        username: "user1",
        email: "user1@example.com",
        password_hash: "hashed_password1",
        name: "User One",
        created_at: new Date(),
    },
    {
        _id: ObjectId(),
        username: "user2",
        email: "user2@example.com",
        password_hash: "hashed_password2",
        name: "User Two",
        created_at: new Date(),
    }
];

// Insert users into the collection
usersCollection.insertMany(users);

// Create events
const events = [
    {
        _id: ObjectId(),
        title: "Event 1",
        description: "Description of Event 1",
        location: "Location 1",
        start_time: new Date("2024-07-15T09:00:00Z"),
        end_time: new Date("2024-07-15T18:00:00Z"),
        created_by: users[0]._id.toString(),  // Reference to User ID
        is_open: true,
        created_at: new Date(),
    },
    {
        _id: ObjectId(),
        title: "Event 2",
        description: "Description of Event 2",
        location: "Location 2",
        start_time: new Date("2024-07-20T10:00:00Z"),
        end_time: new Date("2024-07-20T17:00:00Z"),
        created_by: users[1]._id.toString(),
        is_open: true,
        created_at: new Date(),
    }
];

// Insert events into the collection
eventsCollection.insertMany(events);

// Create participants
const participants = [
    {
        _id: ObjectId(),
        event_id: events[0]._id.toString(),  // Reference to Event ID
        user_id: users[0]._id.toString(),   // Reference to User ID
        joined_at: new Date(),
    },
    {
        _id: ObjectId(),
        event_id: events[1]._id.toString(),
        user_id: users[1]._id.toString(),
        joined_at: new Date(),
    }
];

// Insert participants into the collection
participantsCollection.insertMany(participants);

// Create invitations
const invitations = [
    {
        _id: ObjectId(),
        event_id: events[0]._id.toString(),  // Reference to Event ID
        inviter_id: users[0]._id.toString(),  // Reference to User ID
        invitee_id: users[1]._id.toString(),  // Reference to User ID
        status: "accepted",
        sent_at: new Date(),
        responded_at: new Date(),
    },
    {
        _id: ObjectId(),
        event_id: events[1]._id.toString(),
        inviter_id: users[1]._id.toString(),
        invitee_id: users[0]._id.toString(),
        status: "pending",
        sent_at: new Date(),
    }
];

// Insert invitations into the collection
invitationsCollection.insertMany(invitations);

// Output success message
print("Database initialized successfully!");
