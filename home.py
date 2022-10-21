# This is where all the programs will run

# import flask | redirect user to a web page | url_for is used for creating a URL 
# to prevent the overhead of having to change URLs 
# throughout the application (including in templates)
from fileinput import filename
from os import abort
from flask import Flask, redirect, url_for, request, render_template

app = Flask(__name__)


# Home page
@app.route('/home page/')
def home():
    return render_template('Home.html')

# About Us page
@app.route('/About/')
def about():
    return render_template('About.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)