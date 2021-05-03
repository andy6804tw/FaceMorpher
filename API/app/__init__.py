# coding:utf-8
import config
from flask import Flask,request,render_template
from flask_cors import CORS
from app.controllers.swap import swap 

app=Flask(__name__)
CORS(app)
app.config.from_object(config)

app.register_blueprint(swap, url_prefix='/swap')

@app.route('/test', methods=['GET'])
def home():
    return "<h1>Hello Flask!</h1>"

