"""
Module for User Model, including password hashing
"""

import bcrypt
from database import db

class UserModel(db.Model):
    """
    User Model for storing user related details
    """
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(80), unique=True, nullable=False)
    _password = db.Column('password', db.String(128), nullable=False)

    @property
    def password(self):
        """
        Prevent password from being accessed
        """
        raise AttributeError('password: write-only field')

    @password.setter
    def password(self, password):
        """
        Generate a password hash
        """
        self._password = bcrypt.hashpw(
            password.encode('utf-8'),
            bcrypt.gensalt()).decode('utf-8')

    def check_password(self, password):
        """
        Check the password
        """
        return bcrypt.checkpw(password.encode('utf-8'),
                              self._password.encode('utf-8'))
