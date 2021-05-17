#coding:utf-8
#swap
from flask import Blueprint, request,jsonify,redirect
from datetime import datetime
import base64
import config
import app.modules.morph as morphModule

morph = Blueprint('morph',__name__)
  

@morph.route('', methods=['GET','POST'])
def add():
  if request.method == 'GET':
    morphModule.image_to_video('', 'test')
    with open('app/static/test.gif', "rb") as image_file:
      encoded_string = base64.b64encode(image_file.read())
      return jsonify({'filename':'test', 'result': str(encoded_string)})
  else:
    insertValues = request.get_json()
    image1=insertValues['image1']
    image2=insertValues['image2']
    filename='img_'+datetime.now().strftime("%Y_%m_%d_%H_%M_%S")
    if config.DEBUG:
      filename='test'
    morphModule.image_to_video(insertValues, filename)
    with open('app/static/'+filename+'.gif', "rb") as image_file:
      encoded_string = base64.b64encode(image_file.read())
      return jsonify({'filename':filename, 'result': str(encoded_string)})

@morph.route('/show')
def show():
  return redirect('API/FaceSwap/video/out.avi')
