import pytest
from run import create_app
from database import db

@pytest.fixture(scope='module')
def test_app():
    app = create_app('sqlite:///:memory:') 
    with app.app_context():
        db.create_all()
        yield app

@pytest.fixture(scope='module')
def test_client(test_app):
    return test_app.test_client()
