"""
This module defines the schema for User and UserUpdate.
"""

import re
from marshmallow import Schema, fields, validates, ValidationError


class UserSchema(Schema):
    """
    Schema for User.
    """
    id = fields.Int(dump_only=True)
    email = fields.Str(required=True)
    password = fields.Str(
        required=True, validate=lambda p: re.match(
            r'^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5}$', p))

    @validates('password')
    def validate_password(self, value):
        """
        Validate the password.
        """
        if not re.match(r'^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,30}$', value):
            raise ValidationError(
                'Password must be between 5 to 30 characters long, '
                'with at least 1 uppercase letter and 1 number.')


class UserUpdateSchema(Schema):
    """
    Schema for UserUpdate.
    """
    email = fields.Str(required=True)
    password = fields.Str(
        required=True, validate=lambda p: re.match(
            r'^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5}$', p))

    @validates('password')
    def validate_password(self, value):
        """
        Validate the password.
        """
        if not re.match(r'^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,30}$', value):
            raise ValidationError(
                'Password must be between 5 to 30 characters long, '
                'with at least 1 uppercase letter and 1 number.')
