import os
import boto3
from werkzeug.security import generate_password_hash, check_password_hash

from dotenv import load_dotenv
load_dotenv()

# Getting AWS credentials
aws_access_key_id: str = os.environ.get('AWS_ACCESS_KEY_ID')
aws_secret_access_key: str = os.environ.get('AWS_SECRET_ACCESS_KEY')
aws_region:str = os.environ.get('AWS_DEFAULT_REGION')


# Accessing to dynamodb
dynamodb = boto3.resource(
    'dynamodb', 
    aws_access_key_id = aws_access_key_id, 
    aws_secret_access_key = aws_secret_access_key,
    region_name = aws_region
)


def store_user(username, email, password) -> bool:
    '''
        Create a new user in the dynamodb users table.
        Return True if user is added successfully and False if not.
    '''
    print('Storing user')
    users = dynamodb.Table('users')
    hashed_password: str = generate_password_hash(password)
    
    try:
        response = users.put_item(
            Item = {
                'email': email,
                'username': username,
                'password': hashed_password
            }
        )
        print(response)
        return True
    except Exception as e:
        print(e)
        return False
    
    
    
    
def get_user(email) -> dict:
    key = {'email': email}
    
    users = dynamodb.Table('users')
    response = users.get_item(Key=key)
    print(response)
    
    user = response['Item']
    return user


def get_validated_user(email, password) -> dict:
    user = get_user(email)
    
    if(check_password_hash(user['password'], password)):
        return user
    else:
        return None
    