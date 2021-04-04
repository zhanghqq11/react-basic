'use strict'

const Controller = require('egg').Controller

class MainController extends Controller{
    async index(){
        this.ctx.body="test api"
    }

    async checkLogin(){
        const userName = this.ctx.request.body.userName;
        const password = this.ctx.request.body.password;

        if(userName == "test" && password == "test"){
            let openId = new Date().getTime();
            this.ctx.session.openId = {'openId':openId}
            this.ctx.body = {'data':'success','openId':openId}
        } else{
            this.ctx.body = {data:'fail'}
        }
    }
}

module.exports = MainController