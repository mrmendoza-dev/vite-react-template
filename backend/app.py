from flask import Flask
from flask import request
from flask_cors import CORS

import subprocess


app = Flask(__name__)
CORS(app)


# if __name__ == "__main__":
#     app.run(debug=True)


@app.route('/')
def hello_world():
    return 'Hello, World!'




@app.route("/open-program", methods=["POST"])
def open_program():
    try:
        program_name = "F:\Emulators\Emulators\Windows\GameCube Wii\Dolphin-5.0-19368-x64\Dolphin-x64\Dolphin.exe"
        data = request.get_json()  # Get JSON data from the request body
        print(data)
        
        subprocess.run([program_name], shell=False)
        

        
        return "Program opened successfully"
    except Exception as e:
        return f"Error: {str(e)}"



if __name__ == '__main__':
    app.run()
    
    
