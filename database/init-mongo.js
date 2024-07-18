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
        username: "rottem",
        email: "rottem1357@gmail.com",
        password_hash: "1234",
        name: "Admin user",
        created_at: new Date(),
    }
];

// Insert users into the collection
usersCollection.insertMany(users);

// Output success message
print("Database initialized successfully!");
