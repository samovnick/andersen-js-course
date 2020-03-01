import AppModel from '../models/appmodel';
import AppView from '../views/appview';

export default class App {
  constructor() {
    this.state = 'test';
  }

  // eslint-disable-next-line class-methods-use-this
  run() {
    const model = new AppModel();
    const view = new AppView(model);
    view.render();
  }
}
