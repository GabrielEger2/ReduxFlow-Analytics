def test_add_user(test_client):
    user_data = {'email': 'newuser@example.com', 'password': 'Password123'}
    response = test_client.post('/api/user/', json=user_data)
    assert response.status_code == 201
    assert response.json['email'] == 'newuser@example.com'

def test_validate_token(test_client, auth_headers):
    """Test token validation."""
    response = test_client.post('/api/user/validate-token', headers=auth_headers)
    assert response.status_code == 200
    assert response.json['message'] == 'Token is valid'
