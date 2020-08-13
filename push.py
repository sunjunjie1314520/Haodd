#coding=utf-8
import os
import requests
from datetime import datetime
import json
from threading import Thread

def start():
    time = datetime.now().strftime('%Y/%m/%d-%H:%M:%S')

    os.system('git add ./')
    os.system('git commit -m %s' % time)
    print('commit start -----------------------')
    res = os.popen('git push')
    f = res.read()
    # print(f)
    print('commit success------------------', time)
    try:
        data = {
            'id': 2,
            'is_update': 'true',
        }
        res = requests.post('http://www.okami.net.cn:8000/git/set_sync', data=data)
        if res.status_code == 200:
            # os.system('cls')
            print(res.text)

    except BaseException:
        print('network error')

if __name__ == '__main__':
    start()
