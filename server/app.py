#!/usr/bin/env python3
# app.py
# Remote library imports
from flask import abort, request, session
from sqlite3 import IntegrityError
from flask import Flask, make_response, jsonify, request, session
from sqlalchemy.exc import IntegrityError
##to deploy
# from dotenv import load_dotenv
# load_dotenv()

# Local imports
from config import app,api, Resource, db
from models import Blog, Project, Comment 

# Define API resources
class BlogResource(Resource):
    def get(self):
        blogs = [b.to_dict() for b in Blog.query.all()]
        return make_response(blogs, 200)
    
class CommentResource(Resource):
    def post(self):
        data = request.get_json()
        try:
            new_comment = Comment(**data)
        except:
            return make_response({"errors" : ["validations errors"]}, 400)
        db.session.add(new_comment)
        db.session.commit()
        return make_response(new_comment.to_dict(rules=("-blog_comments.blog",)), 200)
            
class CommentByIDResource(Resource):
    def get(self, id):
        comment = Comment.query.get(id)
        if not comment:
            return make_response({"error": "Comment not found"}, 404)
        return make_response(comment.to_dict(), 200)
    
    def patch(self, id):
        data = request.get_json()
        comment = Comment.query.get(id)
        if not comment:
            return make_response({"error": "Comment not found"}, 404)

        try:
            for attr, value in data.items():
                setattr(comment, attr, value)
        except:
            return make_response({"error": ["validation error"]}, 400)

        db.session.add(comment)
        db.session.commit()
        return make_response(comment.to_dict(), 202)
    
    def delete(self, id):
        comment = Comment.query.filter_by(id=id).first()
        if not comment:
            return make_response({"error": "Comment not found"}, 404)
        db.session.delete(comment)
        db.session.commit()
        return make_response("", 204)        
                 
class CommentsByBlogIdResource(Resource):
    def get(self, blog_id):
        comments = Comment.query.filter_by(blog_id=blog_id).all()
        if not comments:
            return make_response({"error": "Comments not found for this blog"}, 404)
        return make_response([comment.to_dict() for comment in comments], 200)
    
# Define API resources
class ProjectResource(Resource):
    def get(self):
        projects = [p.to_dict() for p in Project.query.all()]
        return make_response(projects, 200)  
    
# Add API resources to the API
api.add_resource(BlogResource, '/api/blogs')
api.add_resource(ProjectResource, '/api/projects')
api.add_resource(CommentResource, '/api/comments')
api.add_resource(CommentByIDResource, '/api/comments/<int:id>')
api.add_resource(CommentsByBlogIdResource, '/api/blog-comment/<int:blog_id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)
