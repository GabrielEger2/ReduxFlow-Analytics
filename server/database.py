"""Database module for Flask application.

This module initializes an SQLAlchemy database instance that can be used
throughout the Flask application for handling database operations.
"""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()
