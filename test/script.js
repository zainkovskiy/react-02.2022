"use strict"

class App {
  constructor() {
    this.container = document.querySelector('.app');
    this.toggle = false;
  }
  init(){
    this.container.insertAdjacentHTML('beforeend', this.render());
    this.setReact();
    this.handler();
  }
  render(){
    return `<div class="block">block</div>
            <div class="block"><button>click me</button></div>
            <div class="block" id="test"></div>
            <div class="block">block</div>`
  }
  setReact(){
    const Button = (props) => {
      return React.createElement('span', {className: props.toggle ? 'green' : 'red'}, 'React Component')
    }

    const Test = () => {
      return React.createElement(Button, {toggle: this.toggle})
    }

    ReactDOM.render(React.createElement(Test), document.getElementById('test'));
  }
  handler(){
    this.container.addEventListener('click', e => {
      if (e.target.tagName === 'BUTTON'){
        this.toggle = !this.toggle;
        this.setReact();
      }
    })
  }
}

const app = new App();
app.init();