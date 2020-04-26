/**
 * @description 背景
 */

import { Sprite } from "../base/Sprite.js";
import { DataStore } from '../base/DataStore.js';
export class BackGround extends Sprite {
    constructor() {
      // image 不可以从 DataStore.getInstance().get('background') 取 = undefined 
      //因为 this.dataStore.put('background', BackGround);
      // 取BackGround类时还未将数据put进入DataStore
        const image = Sprite.getImage('background');
        super(
            image,
            0, 0,
            image.width,
            image.height,
            0, 0,
            DataStore.getInstance().canvas.width,
            DataStore.getInstance().canvas.height);
    }
}