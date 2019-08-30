import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { changeData } from '../store/actions'
class ShopCar extends Component {
    //点击返回首页
    handleReturnClick() {
        this.props.history.push('/index')
    }
    //点击加商品按钮
    handleAddClick(id) {
        let { data, changeData } = this.props;
        let newData = data.map(item => {
            if (item.id === id) {
                item.seckill = item.seckill * 1 + 1
            }
            return item
        })
        changeData(newData)
    }
    //点击件商品按钮
    handleSubClick(id) {
        let { data, changeData } = this.props;
        let newData = data.map(item => {
            if (item.id === id) {
                item.seckill = item.seckill * 1 - 1;
                if (item.seckill === 0) {
                    item.seckill = 0;
                }
            }
            return item
        })
        changeData(newData)
    }
    //点击结算按钮
    handleButtonClick(total){
        this.props.history.push('/settlement/'+total)
    }
    render() {
        let { data } = this.props;
        let shopList = data.filter(item => {
            if (item.seckill * 1) {
                return item
            } else {
                return null
            }
        });
        shopList = shopList.map(item => {
            return (
                <dl key={item.id}>
                    <dt><img src={item.image_url} alt="" /></dt>
                    <dd>
                        <p>{item.title}</p>
                        <b>售价：{item.price}/斤</b>
                        <div className="btns"><span onClick={this.handleSubClick.bind(this, item.id)}>-</span> {item.seckill} <span onClick={this.handleAddClick.bind(this, item.id)}>+</span></div>
                    </dd>
                </dl>
            )
        })
        //计算总价
        let total = data.reduce((prev, next) => {
            return prev + next.seckill * next.price
        }, 0)
        return (
            <div className="shop">
                <div className="returnIndex" onClick={this.handleReturnClick.bind(this)}>返回首页</div>
                <div className="shop-list">
                    {shopList}
                </div>
                <div className="total-price">总计：{total.toFixed(2)}<button onClick={this.handleButtonClick.bind(this,total)}>去结算</button></div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        data: state.data
    }
}
let mapDispatchToProps = {
    changeData
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShopCar))
