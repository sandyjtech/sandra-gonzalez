import json
from config import app, db
from models import Blog, Project

# Load data from db.json
with open('db.json', 'r') as json_file:
    data = json.load(json_file)

with app.app_context():
    # Delete all existing projects
    Project.query.delete()

#     # Seed the Blogs table
#     for blog_data in data.get('blogs', []):
#         blog = Blog(**blog_data)
#         db.session.add(blog)

 # Seed the Projects table
    for project_data in data.get('projects', []):
        project = Project(**project_data)
        db.session.add(project)

    db.session.commit()

print("Projects table reseeded successfully!")