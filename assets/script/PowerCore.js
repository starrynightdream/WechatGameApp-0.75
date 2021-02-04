// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
/**
 * 能量槽类
 */

cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.eList = [0,0,0,0,0]  // 能源槽
        this.index = 0 // 使用第几个能源槽
    },

    // update (dt) {},

    /**
     * 初始化能量槽
     */
    reSet(){
        ;
    },

    /**
     * 读取能量槽的数据
     */
    readPC(){
        ;
    },

    /**
     * 添加能源，如果能源槽满则会加分
     * @param {*} isClear 是否为清洁能源
     * @param {*} E 能源的多少
     */
    addPow(isClear, E){
        ;
    },

    /**
     * 使用能量
     * @param {*} wast 使用量
     */
    use:function(wast){
        ;
    }
});