import pytest

def test_get_users(test_client, auth_headers):
    """Test listing all users."""
    response = test_client.get('/api/user/', headers=auth_headers)
    assert response.status_code == 200
    assert isinstance(response.json, list)

def test_add_user(test_client):
    user_data = {'email': 'newuser@example.com', 'password': 'Password123'}
    response = test_client.post('/api/user/', json=user_data)
    assert response.status_code == 201
    assert response.json['email'] == 'newuser@example.com'

@pytest.mark.parametrize("user_id, expected_status_code", [
    (1, 200),
    (9999, 404)
])
def test_get_user_by_id(test_client, auth_headers, user_id, expected_status_code):
    """Test getting a user by their ID, both existing and non-existing."""
    response = test_client.get(f'/api/user/{user_id}', headers=auth_headers)
    assert response.status_code == expected_status_code
    if expected_status_code == 200:
        assert response.json['id'] == user_id

@pytest.mark.parametrize("user_id, user_data, expected_status_code", [
    (2, {'email': 'updatednewuser@example.com', 'password': 'Password1234'}, 200),
    (9999, {'email': 'falseuser@example.com', 'password': 'Password1234'}, 404)
])
def test_update_user(test_client, auth_headers, user_id, user_data, expected_status_code):
    """Test updating a user by their ID, both existing and non-existing."""
    response = test_client.put(f'/api/user/{user_id}', json=user_data, headers=auth_headers)
    assert response.status_code == expected_status_code
    if expected_status_code == 200:
        assert response.json['email'] == user_data['email']

@pytest.mark.parametrize("user_id, expected_status_code", [
    (2, 204),
    (9999, 404)
])
def test_delete_user(test_client, auth_headers, user_id, expected_status_code):
    """Test deleting a user by their ID, both existing and non-existing."""
    response = test_client.delete(f'/api/user/{user_id}', headers=auth_headers)
    assert response.status_code == expected_status_code

def test_validate_token(test_client, auth_headers):
    """Test token validation."""
    response = test_client.post('/api/user/validate-token', headers=auth_headers)
    assert response.status_code == 200
    assert response.json['message'] == 'Token is valid'

@pytest.mark.parametrize("user_data, expected_status_code", [
    ({'email': 'test.com', 'password': 'test'}, 422),
    ({'email': 'fakeuser@example.com', 'password': 'Password1234'}, 401),
    ({'email': 'test@example.com', 'password': 'Test1234'}, 200)
])
def test_login(test_client, user_data, expected_status_code):
    """Test successful login returns a valid access token and status code 200."""
    response = test_client.post('/api/user/login', json=user_data)
    assert response.status_code == expected_status_code