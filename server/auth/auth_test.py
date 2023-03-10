import unittest
from app import app
from flask import session

import os


class TestAuth(unittest.TestCase):

    def setUp(self):
        pass
    
    def test_signup(self):
        response = self.app.post('/signup', data=dict(
            username='test',
            password='password',
            confirm='password'
        ), follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        user = User.query.filter_by(username='test').first()
        self.assertIsNotNone(user)

    def test_login_logout(self):
        # create user
        pass

        # login with correct credentials
        response = self.app.post('/login', data=dict(
            username='test',
            password='password'
        ), follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertTrue(current_user.is_authenticated)

        # logout
        response = self.app.get('/logout', follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertFalse(current_user.is_authenticated)

    def test_login_incorrect_password(self):
        # create user
        user = User(username='test')
        user.set_password('password')
        db.session.add(user)
        db.session.commit()

        # login with incorrect password
        response = self.app.post('/login', data=dict(
            username='test',
            password='incorrect'
        ), follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertFalse(current_user.is_authenticated)

    def test_login_nonexistent_user(self):
        # login with nonexistent user
        response = self.app.post('/login', data=dict(
            username='nonexistent',
            password='password'
        ), follow_redirects=True)
        self.assertEqual(response.status_code, 200)
        self.assertFalse(current_user.is_authenticated)

if __name__ == '__main__':
    unittest.main()
