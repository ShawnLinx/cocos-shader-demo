/*
 * @Author: yansixing
 * @Date: 2019-08-27 16:17:43
 * @Github: https://github.com/yansixing
 * @LastEditTime: 2020-08-04 09:08:02
 */

const { ccclass, property,executeInEditMode } = cc._decorator;

@ccclass
@executeInEditMode
export default class spirteOutline extends cc.Component {

    // @property
    bluramount: number = 0.03;

    img: cc.Sprite = null;
    material: cc.Material;

    onLoad() {
        this.img = this.getComponent(cc.Sprite);
        this.material = this.img.getMaterial(0);

        this.material.effect.setProperty('bluramount', this.bluramount);
        console.log(this.material);
    }

}
