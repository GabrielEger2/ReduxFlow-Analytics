"""This module contains fixtures for the tests."""

import logging
import pytest
from run import create_app
from database import db
from models import UserModel


@pytest.fixture(scope='module')
def test_app():
    """Create a Flask app for testing."""
    app = create_app('sqlite:///:memory:')
    with app.app_context():
        db.create_all()
        user = UserModel(email='test@example.com', password='Test1234')
        db.session.add(user)
        db.session.commit()
        yield app
        db.session.remove()
        db.drop_all()


@pytest.fixture(scope='module')
def test_client(test_app):
    """Create a test client for the Flask app."""
    return test_app.test_client()


@pytest.fixture(scope='module')
def auth_headers(test_client):
    """Get the authentication headers."""
    response = test_client.post(
        '/api/user/login',
        json={
            'email': 'test@example.com',
            'password': 'Test1234'})
    logging.debug(response.headers)
    access_token_cookie = response.headers.get('Set-Cookie', '').split(';')[0]

    csrf_token_cookie = [cookie for cookie in response.headers.getlist(
        'Set-Cookie') if 'csrf_access_token' in cookie][0]
    csrf_token = csrf_token_cookie.split(';')[0].split('=')[1]

    return {
        'Cookie': access_token_cookie,
        'X-CSRF-TOKEN': csrf_token
    }
