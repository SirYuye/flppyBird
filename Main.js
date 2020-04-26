/**
 * @description 初始化整个游戏的精灵 作为游戏开始的入口
 */
import { ResourcesLoader } from './js/base/ResourcesLoader.js'
import { Director } from './js/Director.js'
import { BackGround } from './js/runtime/BackGround.js';
import { DataStore } from './js/base/DataStore.js';
import { Land } from './js/runtime/Land.js';
import { Birds } from './js/player/Birds.js';
import { StartButton } from './js/player/StartButton.js';
import { Score } from './js/player/Score.js';
import { APIExample } from './js/APIExample.js';

export class Main {
    constructor() {
        // this.canvas = document.getElementById('canvas');
        this.canvas = wx.createCanvas();
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourcesLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoader(map))
    }

    createBackgroundMusic() {
      const bgm = wx.createInnerAudioContext();
      bgm.autoplay = true;
      bgm.loop = true;
      bgm.src = 'res/bgm.mp3';
    }

    onResourceFirstLoader(map) {
        this.dataStore.canvas = this.canvas;
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.createBackgroundMusic();
        const examples = new APIExample();
        // examples.getUserInfo();
        // examples.login();
        // examples.getSettings();
        // examples.httpExample();
        // examples.socketExample();
        // examples.download();
        this.init();
    }

    init() {
        // 首先重置游戏是没有结束的
        this.director.isGameOver = false;
        this.dataStore
          .put('pencils', [])
          .put('background', BackGround)
          .put('land', Land)
          .put('birds', Birds)
          .put('score', Score)
          .put('startButton', StartButton);
        this.registerEvent();
        // 创建铅笔要在游戏逻辑运行之前
        this.director.createPencil(); 
        this.director.run();
    }

    registerEvent() {
      wx.onTouchStart(() => {
        if(this.director.isGameOver) {
          this.init();
        } else {
          this.director.birdsEvent();
        }
      });
    }
}

