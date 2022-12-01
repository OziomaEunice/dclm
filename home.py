# DCLM Website
# This is where all the programs will run

# import flask | redirect user to a web page | url_for is used for creating a URL 
# to prevent the overhead of having to change URLs 
# throughout the application (including in templates)
from fileinput import filename
from os import abort
from flask import Flask, redirect, url_for, request, render_template

app = Flask(__name__)


# Home page
@app.route('/')
@app.route('/DCLM/Home/')
def home():
    return render_template('Home.html')

# About page
# How this will work is by using {{ url_for('about') }} in the html files,
# (in the section of About), it will link to the html files and open them 
# on the browser.
@app.route('/DCLM/About/')
def about():
    return render_template('About.html')


# Sermon page
# How this will work is by using {{ url_for('sermon') }} in the html files,
# (in the section of Sermons), it will link to the html files and open them 
# on the browser.
@app.route('/DCLM/Sermons/')
def sermon():
    return render_template('Sermon.html')


# Resource page
# How this will work is by using {{ url_for('resource') }} in the html files,
# (in the section of Resources), it will link to the html files and open them 
# on the browser.
@app.route('/DCLM/Resources/')
def resource():
    return render_template('Resource.html')




if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=True)