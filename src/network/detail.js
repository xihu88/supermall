import {request} from 'network/request'

export function getDetailData(iid) {
  return request({
    url:'/detail',
    params:{
      iid
    }
  })
}

export class Goods {
  // constructor(itemInfo, columns, services) {
  //   this.title = itemInfo.title;
  //   this.desc = itemInfo.desc;
  //   this.newPrice = itemInfo.price;
  //   this.oldPrice = itemInfo.oldPrice;
  //   this.discount = itemInfo.discountDesc;
  //   this.columns = columns;
  //   this.services = services;
  //   this.nowPrice = itemInfo.highNowPrice;
  // }
  constructor(res) {
    this.title = res.data.result.itemInfo.title;
    this.desc = res.data.result.itemInfo.desc;
    this.newPrice = res.data.result.itemInfo.price;
    this.oldPrice = res.data.result.itemInfo.oldPrice;
    this.discount = res.data.result.itemInfo.discountDesc;
    this.columns = res.data.result.columns;
    this.services = res.data.result.shopInfo.services;
    this.nowPrice = res.data.result.itemInfo.highNowPrice;
  }
}

export class Shop {
  constructor(res) {
    this.shopLogo = res.data.result.shopInfo.shopLogo;
    this.name = res.data.result.shopInfo.name;
    this.fans = res.data.result.shopInfo.cFans;
    this.sells = res.data.result.shopInfo.cSells;
    this.score = res.data.result.shopInfo.score;
    this.goodsCount = res.data.result.shopInfo.cGoods;
    
  }
}
export class GoodsParam {
  constructor(res) {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    this.image = res.data.result.itemParams.info.images ? res.data.result.itemParams.info.images[0] : '';
    this.infos = res.data.result.itemParams.info.set;
    this.sizes = res.data.result.itemParams.rule.tables;
  }
}

export function getRecommend() {
  return request({
    url:'/recommend'
  })
}