# coding:utf-8
import config
from flask import Flask,request,render_template
from flask_cors import CORS
from app.controllers.morph import morph 

app=Flask(__name__)
CORS(app)
app.config.from_object(config)

app.register_blueprint(morph, url_prefix='/morph')

@app.route('/test', methods=['GET'])
def home():
    return "<h1>Hello Flask!</h1>"

