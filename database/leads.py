import os
import boto3

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


def store_lead(name, email) -> bool:
    '''
        Create a new user in the dynamodb users table.
        Return True if user is added successfully and False if not.
    '''
    
    users = dynamodb.Table('leads_xs')
    
    try:
        users.put_item(
            Item = {
                'name': name,
                'email': email,
            }
        )
        return True
    except Exception as e:
        print(e)
        return False
    
    

    
def get_lead(email) -> dict:

    key = {'email': email}
    
    users = dynamodb.Table('leads_xs')
    
    try:
        response = users.get_item(Key=key)
        user = response['Item']
        return user
    except Exception as e:
        print('Error getting user: ')
        print(e)
        return {}
