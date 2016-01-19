
# Gerard Geer's personal website (C) Gerard Geer 2016

from flask import Flask, send_from_directory, request
from datetime import datetime
from sys import exit
import logging

"""
This is my personal website's server. It just spits out some HTML
and JavaScript. Nothing too fancy.
"""

app = Flask(__name__)

# Index page.
@app.route('/', methods=['GET'])
def fetchIndex():
    print('-------------------------------------------------------------------------------')
    print(' HTML Request from: '+request.remote_addr)
    print(' Time: '+str(datetime.now())+' For: '+request.path)
    return send_from_directory('webs/', 'index.html')
    
# Other HTML pages.
@app.route('/<string:filename>', methods=['GET'])
def fetchHTML(filename):
    print('-------------------------------------------------------------------------------')
    print(' HTML Request from: '+request.remote_addr)
    print(' Time: '+str(datetime.now())+' For: '+request.path)
    return send_from_directory('webs/', filename)
    
# CSS.
@app.route('/css/<string:filename>',methods=['GET'])
def fetchCSS(filename):
    print('-------------------------------------------------------------------------------')
    print(' CSS Request from: '+request.remote_addr)
    print(' Time: '+str(datetime.now()) + ' For: '+request.path)
    return send_from_directory('webs/css/',filename)
    
# JavaScript.
@app.route('/js/<string:filename>',methods=['GET'])
def fetchJS(filename):
    print('-------------------------------------------------------------------------------')
    print(' JS Request from: '+request.remote_addr)
    print(' Time: '+str(datetime.now()) + ' For: '+request.path)
    return send_from_directory('webs/js/',filename)
    
# Images.
@app.route('/img/<path:filename>',methods=['GET'])
def fetchImages(filename):
    print('-------------------------------------------------------------------------------')
    print(' Image Request from: '+request.remote_addr)
    print(' Time: '+str(datetime.now()) + ' For: '+request.path)
    return send_from_directory('webs/img/',filename)
    
# Downloads and stuff.
@app.route('/dl/<path:filename>',methods=['GET'])
def fetchDLs(filename):
    print('-------------------------------------------------------------------------------')
    print(' Download Request from: '+request.remote_addr)
    print(' Time: '+str(datetime.now()) + ' For: '+request.path)
    return send_from_directory('webs/dl/',filename)
    
    
# Draw the start-up message.
def printStartupHeader():
    print('*******************************************************************************')
    print(" Gerard's site is up and running!")
    print('*******************************************************************************')
    
if __name__ == '__main__':
    """
    The main execution function of the server. Just, well, starts the server.
    
    Parameters:
        None.
        
    Returns:
        None.
    
    Preconditions:
        None.
        
    Postconditions:
        The program has been run.
    """
    # Disable normal logging so that we don't clutter up things.
    log = logging.getLogger('werkzeug')
    log.setLevel(logging.WARNING)
    
    # Start the server. For pleasantries.
    printStartupHeader()
    app.run(host='0.0.0.0')