def test_add_user(test_client):
    user_data = {'email': 'newuser@example.com', 'password': 'Password123'}
    response = test_client.post('/api/user/', json=user_data)
    assert response.status_code == 201
    assert response.json['email'] == 'newuser@example.com'