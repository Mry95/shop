import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'
import TwoDimensionCode from '../components/twoDimensionCode'

class Settlement extends Component {
    constructor(props){
        super(props);
        this.state={
            flag:true
        }
    }
    click1(){
        this.setState({
            flag:true
        })
    }
    click2(){
        this.setState({
            flag:false
        })
    }
    render() {
        let {flag}=this.state;
        return (
            <div>
                总价为：<b style={{color:"red"}}>{this.props.match.params.total}</b> 
                请选择结算方式：<button onClick={this.click1.bind(this)}>微信</button> <button onClick={this.click2.bind(this)}>支付宝</button>
                <TwoDimensionCode src={flag?'https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=c71622e5c08065387beaa315afe6c679/d01373f082025aaff00ad960f1edab64034f1a64.jpg':'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566974054&di=f666014be526eece603480bcbd99290e&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.weitiyuba.com%2Fmmbiz_jpg%2F7maoNufhrvvZiacYE76UxkP8KsEHzFuRdIMWBPc2dgVTJDibggHZrsCynDphnU1kxUwU5XxMPibKhS2Y6OHvAtc2A%2F0%3Fwx_fmt.jpeg'}></TwoDimensionCode>
            </div>
        )
    }
}
export default withRouter(Settlement)
