/**
 * @description 初始化整个游戏的精灵 作为游戏开始的入口
 */
import { ResourcesLoader } from './js/base/ResourcesLoader.js'
import { Director } from './js/Director.js'
import { BackGround } from './js/runtime/BackGround.js';
import { DataStore } from './js/base/DataStore.js';
import { Land } from './js/runtime/Land.js';
import { Birds } from './js/player/Birds.js';

export class Main {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        this.director = Director.getInstance();
        const loader = ResourcesLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoader(map))
    }

    onResourceFirstLoader(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    init() {
        // 首先重置游戏是没有结束的
        this.director.isGameOver = false;
        this.dataStore
          .put('pencils', [])
          .put('background', BackGround)
          .put('land', Land)
          .put('birds', Birds);
        // 创建铅笔要在游戏逻辑运行之前
        this.director.createPencil(); 
        this.director.run();
    }
}

