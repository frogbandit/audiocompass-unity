from flask import Flask, request, render_template
app = Flask(__name__)

app.debug = True 

@app.route('/')
def hello_world():
    return render_template('hello.html')

if __name__ == '__main__':
    app.run()