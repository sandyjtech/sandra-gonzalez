from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
from config import db

# Models go here!

class Blog(db.Model, SerializerMixin):
    __tablename__ = "blogs"
    id = db.Column(db.Integer, primary_key=True)
    
    # Add validation for title and content fields
    title = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text, nullable=False)
    link = db.Column(db.String(255), nullable=True)

    blog_comments = db.relationship("Comment", backref="blog")
    serialize_rules = ("-blog_comments.blog",)

class Project(db.Model, SerializerMixin):
    __tablename__ = "projects"
    id = db.Column(db.Integer, primary_key=True)
    
    # Add validation for title and content fields
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    link = db.Column(db.String(255), nullable=True)
    video = db.Column(db.String, nullable=True)
   
    
class Comment(db.Model, SerializerMixin):
    __tablename__ = "comments"
    id = db.Column(db.Integer, primary_key=True)    
    # Add validation for email field
    email = db.Column(db.String(255), nullable=False)
    content = db.Column(db.String(255), nullable=False)
    @validates('email')
    def validate_email(self, key, email):
        # Add custom email validation logic here
        # Example: Check if the email is in a valid format
        if '@' not in email:
            raise ValueError("Invalid email format")
        return email

    like = db.Column(db.Boolean, default=False)
    # Define a relationship between Comment and Blog
    blog_id = db.Column(db.Integer, db.ForeignKey('blogs.id'))
    serialize_rules = ("-blog_comments.blog",)
    
class Schedule(db.Model, SerializerMixin):
    __tablename__ = "schedules"
    
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), nullable=False)  # Store the user's email address
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=True)
    start_datetime = db.Column(db.DateTime, nullable=False)
    end_datetime = db.Column(db.DateTime, nullable=False)
    location = db.Column(db.String(255), nullable=True)
    google_event_id = db.Column(db.String(255), nullable=True)  # Store the Google Calendar event ID here

    # Remove the duplicate email validation decorator
    # @validates('email')
    # def validate_email(self, key, email):
    #     # Add custom email validation logic here
    #     # Example: Check if the email is in a valid format
    #     if '@' not in email:
    #         raise ValueError("Invalid email format")
    #     return email

    # Add an email confirmation status
    email_confirmed = db.Column(db.Boolean, default=False)

    # Define a datetime for email confirmation
    email_confirmation_datetime = db.Column(db.DateTime, nullable=True)

    # Define a single "confirmed" column for scheduling
    confirmed = db.Column(db.Boolean, default=False)
    date = db.Column(db.DateTime, nullable=False)
    
class EmailRecord(db.Model):
    __tablename__ = "email_records"
    
    id = db.Column(db.Integer, primary_key=True)
    sender = db.Column(db.String(255), nullable=False)
    recipient = db.Column(db.String(255), nullable=False)
    subject = db.Column(db.String(255), nullable=False)
    content = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime, default=db.func.now())
    status = db.Column(db.String(50), nullable=False)  # e.g., "sent", "delivered", "failed"
