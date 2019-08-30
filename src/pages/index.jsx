import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getData } from '../store/actions'
import 'antd/dist/antd.min.css'
import Item from '../components/Item'

class Index extends Component {
    constructor(props){
        super(props);
        this.state={
            defaultValue:''
        }
    }
    handleChange(e){
        let el=e.target;
        this.setState({
            defaultValue:el.value
        })
    }
    render() {
        let {defaultValue}=this.state;
        let { data } = this.props;
        let list = [];
        if(defaultValue.trim().length){
            if(data.length>0){
                data=data.filter(item=>{
                    for(var k in item){
                        if(item[k].includes(defaultValue)){
                            return item
                        }
                    }
                })
            }
        }
        if (data.length > 0) {
            list = data.map(item => {
                return <Item key={item.id} itemId={item.id}>
                    <dt><img src={item.image_url} alt=""/></dt>
                    <dd>
                        <p>{item.title}</p>
                        <p>售价：{item.price}/斤</p>
                    </dd>
                </Item>
            })
        }
        
        return (
            <div className="wrap">
                <header>
                    <input type="text" value={defaultValue} placeholder="请输入关键字" onChange={this.handleChange.bind(this)} />
                </header>
                <main>
                    {list}
                </main>
                
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
    getData,
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index))
