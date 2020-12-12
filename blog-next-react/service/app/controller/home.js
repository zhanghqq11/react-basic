'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(this);
    ctx.body = 'hi, egg';
  }

  async list() {
    const { ctx } = this;
    ctx.body ='<h1>hqzhang blog list</h1>'
  }
}

module.exports = HomeController;
