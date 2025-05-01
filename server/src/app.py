from flask import Flask, jsonify,request
from flask_cors import CORS
import psycopg2
import os

app = Flask(__name__)
CORS(app)

# PostgreSQL connection settings
DB_HOST = 'localhost'
DB_NAME = 'dev'
DB_USER = 'hover'
DB_PASSWORD = 'hover@123'
DB_PORT = '5432'  # default PostgreSQL port

# Create a database connection
def get_db_connection():
    conn = psycopg2.connect(
        host=DB_HOST,
        database=DB_NAME,
        user=DB_USER,
        password=DB_PASSWORD,
        port=DB_PORT
    )
    return conn

# Example route
@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({"message": "Hello from Flask!"})

# Example route to fetch data from a table (optional)
@app.route('/api/data', methods=['GET'])
def get_data():
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute('SELECT * FROM users;')  # Replace your_table with your real table name
    rows = cur.fetchall()
    cur.close()
    conn.close()

    # Example of returning rows
    return jsonify(rows)

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    if not username or not password:
        return jsonify({'error': 'Username and password required'}), 400

    conn = get_db_connection()
    cur = conn.cursor()

    # Assuming username is email
    cur.execute('SELECT id, firstname, lastname, email, password FROM users WHERE email = %s', (username,))
    user = cur.fetchone()

    cur.close()
    conn.close()

    if user:
        user_id, firstname, lastname, email, db_password = user

        # If passwords are stored as plain text (not recommended)
        if password == db_password:
            return jsonify({
                'id': user_id,
                'firstname': firstname,
                'lastname': lastname,
                'email': email
            }), 200
        else:
            return jsonify({'error': 'Invalid credentials'}), 401

    else:
        return jsonify({'error': 'Invalid credentials'}), 401
    

@app.route('/api/signup', methods=['POST'])
def signup():
    data = request.get_json()
    
    email = data.get('email')
    firstname = data.get('firstname')
    lastname = data.get('lastname')
    usertype = data.get('usertype')  # 'parent' or 'child'
    parent_id = data.get('parent_id')  # only required if usertype is child
    password = data.get('password')

    # Validation
    # if not all([email, firstname, lastname, usertype, password, confirm_password]):
    #     return jsonify({'error': 'All fields are required'}), 400

    if usertype == 'child' and not parent_id:
        return jsonify({'error': 'Parent ID is required for child user'}), 400

    conn = get_db_connection()
    cur = conn.cursor()

    # Check if email already exists
    cur.execute('SELECT id FROM users WHERE email = %s', (email,))
    if cur.fetchone():
        cur.close()
        conn.close()
        return jsonify({'error': 'User already exists'}), 409

    # Insert user into database
    cur.execute('''
        INSERT INTO users (email, firstname,lastname, usertype, parent_id, password)
        VALUES (%s, %s, %s, %s, %s, %s)
    ''', (email, firstname, lastname, usertype, parent_id, password))  # You should hash the password

    conn.commit()
    cur.close()
    conn.close()

    return jsonify({'message': 'User registered successfully'}), 201

if __name__ == '__main__':
    app.run(debug=True)
