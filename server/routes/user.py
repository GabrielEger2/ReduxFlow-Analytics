"""
This module handles user operations.
"""
from datetime import timedelta
from flask import jsonify, make_response
from flask.views import MethodView
from flask_smorest import Blueprint, abort
from sqlalchemy.exc import SQLAlchemyError
from flask_jwt_extended import create_access_token, set_access_cookies, jwt_required

from database import db
from models import UserModel
from schemas import UserSchema, UserUpdateSchema

blp = Blueprint(
    "User",
    __name__,
    description="Operations on items",
    url_prefix="/api/user")


@blp.route("/")
class Item(MethodView):
    """Handles operations on users."""
    @jwt_required()
    @blp.response(200)
    def get(self):
        """List users"""
        users = UserModel.query.all()

        return jsonify(UserSchema(many=True).dump(users))

    @blp.arguments(UserSchema)
    @blp.response(201, UserSchema)
    def post(self, new_data):
        """Add a new user"""
        user = UserModel(**new_data)

        try:
            db.session.add(user)
            db.session.commit()
        except SQLAlchemyError:
            abort(500, message="An error occurred while inserting the item.")

        return user

@blp.route("/<int:user_id>")
class ItemById(MethodView):
    """Handles operations on a user by ID."""
    @jwt_required()
    @blp.response(200, UserSchema)
    def get(self, user_id):
        """Get user by ID"""
        user = UserModel.query.get_or_404(user_id)
        return user

    @jwt_required()
    @blp.arguments(UserUpdateSchema)
    @blp.response(200, UserSchema)
    def put(self, new_data, user_id):
        """Update user by ID"""
        user = UserModel.query.get_or_404(user_id)
        for key, value in new_data.items():
            setattr(user, key, value)
        db.session.commit()
        return user

    @jwt_required()
    @blp.response(204)
    def delete(self, user_id):
        """Delete user by ID"""
        user = UserModel.query.get_or_404(user_id)
        db.session.delete(user)
        db.session.commit()

@blp.route("/login")
class Login(MethodView):
    """Handles user login."""
    @blp.arguments(UserSchema(only=("email", "password")))
    @blp.response(200, UserSchema)
    def post(self, new_data):
        """Login"""
        user = UserModel.query.filter_by(email=new_data["email"]).first()
        if user and user.check_password(new_data["password"]):
            access_token = create_access_token(identity=(user.email, user.id), expires_delta=timedelta(hours=9))
            response = make_response(
                jsonify(
                    logged_in_as=user.email,
                    message="LogIn successful!"), 200)
            set_access_cookies(response, access_token)
            return response

        abort(401, message="Invalid email or password")