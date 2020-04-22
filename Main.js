/**
 * @description 初始化整个游戏的精灵 作为游戏开始的入口
 */
import { ResourcesLoader } from './js/base/ResourcesLoader.js'
import { Director } from './js/Director.js'
import { BackGround } from './js/runtime/BackGround.js';
import { DataStore } from './js/base/DataStore.js';

export class Main {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.dataStore = DataStore.getInstance();
        const loader = ResourcesLoader.create();
        loader.onLoaded(map => this.onResourceFirstLoader(map))
    }

    onResourceFirstLoader(map) {
        this.dataStore.ctx = this.ctx;
        this.dataStore.res = map;
        this.init();
    }

    init() {
        this.dataStore.put('background', BackGround);
        Director.getInstance().run();
    }
}

