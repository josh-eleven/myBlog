import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    return ctx.render('home/index.tpl', {a:1});
  }
}
