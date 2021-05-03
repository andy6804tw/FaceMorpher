#coding:utf-8
#swap
from flask import Blueprint, request,jsonify,redirect

import app.modules.morph as morphModule

morph = Blueprint('morph',__name__)
  

@morph.route('', methods=['GET','POST'])
def add():
  if request.method == 'GET':
    morphModule.image_to_video('')
    return jsonify({'result': 'call GET from /morph'})
  else:
    insertValues = request.get_json()
    image1=insertValues['image1']
    image2=insertValues['image2']
    morphModule.image_to_video(insertValues)
    return jsonify({'result':morphModule.getResult(),'image1':image1,'image2':image2})

@morph.route('/show')
def show():
  return redirect('API/FaceSwap/video/out.avi')
  
