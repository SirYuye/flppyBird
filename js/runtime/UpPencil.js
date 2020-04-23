/**
 * @description 上半部分的铅笔
 */
import { Pencil } from "./Pencil.js";
import { Director } from "../Director.js";
import { DataStore } from "../base/DataStore.js";

export class UpPencil extends Pencil {
  constructor(top) {
    const image = DataStore.getInstance().res.get('pencilUp');
    super(image, top)
  }

  draw() {
    this.y = this.top-this.height;
    super.draw();
  }
}