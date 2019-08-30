import React, { Component } from 'react'
import axios from 'axios'
import { Route, Redirect, Switch ,withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {getData} from '../store/actions'
import Index from '../pages/index'
import Details from '../components/Details'
import ShopCar from '../components/ShopCar'
import Settlement from '../pages/Settlement'


class Router extends Component {
    componentDidMount() {
        let { getData } = this.props;
        axios.get("/list").then(res => {
            getData(res.data.commodity)
        })
    }
    render() {
        return (
            <div className="wrap">
                <Redirect path='/' to="/index"></Redirect>
                <Switch>
                <Route path="/index">
                    <Index></Index>
                </Route>
                <Route path="/details/:id">
                    <Details></Details>
                </Route>
                <Route path="/shopCar">
                    <ShopCar></ShopCar>
                </Route>
                <Route path="/settlement/:total?">
                    <Settlement></Settlement>
                </Route>
                </Switch>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        
    }
}
let mapDispatchToProps={
    getData
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Router))
