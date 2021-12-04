// pages/demo07/demo07.js
Page({
    data: {
        gender: ""
    },
    handleChange(e){
        //获取单选框的值
    let gender=e.detail.value;
    // 2.把值  赋值给data中的数据
    this.setData({
    //    gender:gender
        gender
    })
    }

})