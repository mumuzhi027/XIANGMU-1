from flask import Flask, request, jsonify, send_from_directory
import pymysql
import random
import string

app = Flask(__name__)

# MySQL 配置
MYSQL_HOST = 'localhost'
MYSQL_USER = 'root'
MYSQL_PASSWORD = 'yourpassword'
MYSQL_DB = 'user_db'

# 获取数据库连接
def get_db_connection():
    return pymysql.connect(
        host=MYSQL_HOST,
        user=MYSQL_USER,
        password=MYSQL_PASSWORD,
        db=MYSQL_DB,
        cursorclass=pymysql.cursors.DictCursor
    )

# 生成随机验证码
def generate_verification_code():
    return ''.join(random.choices(string.digits, k=6))

# 提供 HTML 页面
@app.route('/')
def index():
    return send_from_directory('static', 'LoginPage.html')

# 提供静态文件（CSS、JS、图片等）
@app.route('/<path:filename>')
def static_files(filename):
    return send_from_directory('static', filename)

# 用户注册接口
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')  # 使用 username 而不是 phone_number
    verification_code = data.get('verification_code')
    password = data.get('password')

    if not username or not verification_code or not password:
        return jsonify({'success': False, 'message': '用户名、验证码和密码不能为空'}), 400

    connection = get_db_connection()
    try:
        with connection.cursor() as cursor:
            # 检查验证码是否正确
            cursor.execute("SELECT verification_code FROM users WHERE username = %s", (username,))
            result = cursor.fetchone()

            if not result or result['verification_code'] != verification_code:
                return jsonify({'success': False, 'message': '验证码错误'}), 400

            # 更新用户密码
            cursor.execute("UPDATE users SET password = %s WHERE username = %s", (password, username))
            connection.commit()

            return jsonify({'success': True, 'message': '注册成功'}), 201
    except Exception as e:
        connection.rollback()
        return jsonify({'success': False, 'message': str(e)}), 500
    finally:
        connection.close()

# 发送验证码接口
@app.route('/send_verification_code', methods=['POST'])
def send_verification_code():
    data = request.get_json()
    username = data.get('username')

    if not username:
        return jsonify({'success': False, 'message': '用户名不能为空'}), 400

    verification_code = generate_verification_code()

    connection = get_db_connection()
    try:
        with connection.cursor() as cursor:
            # 检查用户名是否已存在
            cursor.execute("SELECT * FROM users WHERE username = %s", (username,))
            user = cursor.fetchone()

            if user:
                # 更新验证码
                cursor.execute("UPDATE users SET verification_code = %s WHERE username = %s", (verification_code, username))
            else:
                # 插入新用户
                cursor.execute("INSERT INTO users (username, verification_code) VALUES (%s, %s)", (username, verification_code))

            connection.commit()

            # 这里可以调用第三方短信服务发送验证码
            # send_sms(username, verification_code)

            return jsonify({'success': True, 'message': '验证码已发送', 'verification_code': verification_code}), 200
    except Exception as e:
        connection.rollback()
        return jsonify({'success': False, 'message': str(e)}), 500
    finally:
        connection.close()

# 用户登录接口
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')  # 使用 username 而不是 phone_number
    password = data.get('password')

    if not username or not password:
        return jsonify({'success': False, 'message': '用户名和密码不能为空'}), 400

    connection = get_db_connection()
    try:
        with connection.cursor() as cursor:
            # 检查用户是否存在
            cursor.execute("SELECT * FROM users WHERE username = %s AND password = %s", (username, password))
            user = cursor.fetchone()

            if user:
                return jsonify({'success': True, 'message': '登录成功'}), 200
            else:
                return jsonify({'success': False, 'message': '用户名或密码错误'}), 401
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500
    finally:
        connection.close()

# 重置密码接口
@app.route('/reset_password', methods=['POST'])
def reset_password():
    data = request.get_json()
    username = data.get('username')  # 使用 username 而不是 phone_number
    verification_code = data.get('verification_code')
    new_password = data.get('new_password')

    if not username or not verification_code or not new_password:
        return jsonify({'success': False, 'message': '用户名、验证码和新密码不能为空'}), 400

    connection = get_db_connection()
    try:
        with connection.cursor() as cursor:
            # 检查验证码是否正确
            cursor.execute("SELECT verification_code FROM users WHERE username = %s", (username,))
            result = cursor.fetchone()

            if not result or result['verification_code'] != verification_code:
                return jsonify({'success': False, 'message': '验证码错误'}), 400

            # 更新用户密码
            cursor.execute("UPDATE users SET password = %s WHERE username = %s", (new_password, username))
            connection.commit()

            return jsonify({'success': True, 'message': '密码重置成功'}), 200
    except Exception as e:
        connection.rollback()
        return jsonify({'success': False, 'message': str(e)}), 500
    finally:
        connection.close()

if __name__ == '__main__':
    app.run(debug=True)