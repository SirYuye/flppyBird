/**
 * @description 资源文件加载器 确保canvas在图片资源加载完成后才进行渲染
 */

import { Resources } from './Resources.js'

export class ResourcesLoader{
    constructor() {
        this.map = new Map(Resources)
        for(let [key, value] of this.map) {
            // const image = new Image();
            const image = wx.createImage();
            image.src = value
            this.map.set(key, image)
        }
    }

    onLoaded(callBack) {
        let loadedCount = 0
        for(let value of this.map.values()) {
            value.onload = () => {
                loadedCount++
                if(loadedCount >= this.map.size) {
                    callBack(this.map);
                }
            }
        }
    }

    static create() {
        return new ResourcesLoader();
    }
}