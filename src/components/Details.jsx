import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {changeData} from '../store/actions'
class Details extends Component {
    constructor(props){
        super(props);
        this.state={
            num:0
        }
    }
    //点击返回首页
    handleReturnClick(){
        this.props.history.push('/index')
    }
    //点击加入购物车按钮
    handleButtonClick(id){
        let {data,changeData}=this.props;
        let newData=data.map(item=>{
            if(item.id===id){
                item.seckill=item.seckill*1+1
            }
            return item
        });
        changeData(newData)
    }
    //点击跳转购物车路由
    handleShopCarClick(){
        this.props.history.push('/shopCar')
    }
    render() {
        let {data}=this.props
        let {id}=this.props.match.params
        //计算购物车总数量
        let num=data.reduce((prev,next)=>{
            return prev+next.seckill*1
        },0)
        //将添加到购物车的列表筛选出来
        let itemList=data.filter(item=>{
            if(item.id===id){
                return item
            }else{
                return null
            }
        })
        //将购物车列表渲染成 reactDOM元素
        itemList=itemList.map(item=>{
            return (
                <dl key={item.id}>
                    <dt><img src={item.image_url} alt=""/></dt>
                    <dd>
                        <p>{item.title}</p>
                        <p>售价：{item.price}/斤</p>
                        <div className="addShop" onClick={this.handleButtonClick.bind(this,id)}>加入购物车</div>
                    </dd>
                </dl>
            )
        })
        return (
            <div className="detail">
                <div className="returnIndex" onClick={this.handleReturnClick.bind(this)}>返回首页</div>
                {itemList}
                <div className="shopCar" onClick={this.handleShopCarClick.bind(this)}>购物车<b>{num}</b></div>
            </div>
        )
    }
}
//将仓库的属性拿出来，放到 this.props上
function mapStateToProps(state){
    return {
        data:state.data
    }
}
//将所有的action方法绑定到this.props  ( 机制：自动dispatch，直接调用action方法就可以改变仓库数据 )
let actions={
    changeData
}
export default connect(mapStateToProps,actions)(withRouter(Details))
