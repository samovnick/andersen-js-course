export default class AppView {
  constructor(model) {
    this.header = model.name;
  }

  render() {
    const content = document.createElement('h1');
    content.innerHTML = this.header;
    document.body.appendChild(content);
  }
}
