// pages/demo03/demo03.js
Page({
    data: {
        num:0
    },
    //输入框的input事件的执行逻辑
    handleInput(e) {
        // console.log("开心");
        this.setData({
            num: e.detail.value
        })
    },
    handletap(e) {
        const operation = e.currentTarget.dataset.operation;
        this.setData({
            num: this.data.num + operation
        })
    }
    
})