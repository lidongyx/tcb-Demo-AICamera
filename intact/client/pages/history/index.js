/* global getApp, Page */
import regeneratorRuntime from "../../libs/runtime";

Page({
  data: {
    title: "历史记录",
    desc: "显示最近 20 次记录，原图 - 处理图像 顺序排列",
    list: []
  },
  async onLoad() {
    let db = wx.cloud.database();
    let collection = db.collection("pictures");
    if (!collection) {
      return;
    }
    try {
      // 查找 20 条数据并根据创建时间倒序排列
      // do something
      
      // 查找 完成 得到数据列表 data
      this.setData({
        list: data.reduce((list, { origin, output }) => {
          list.push(origin);
          list.push(output);
          return list;
        }, [])
      });
    } catch (e) {
      console.log(e);
      wx.showToast({
        title: "查询失败",
        icon: "none"
      });
    }
  }
});
