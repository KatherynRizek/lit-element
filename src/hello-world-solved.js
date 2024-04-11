import { LitElement, html, css } from 'lit';
import './hello-greeting.js'

class HelloWorld extends LitElement {
  static properties = {
    input: { type: String },
  }

  constructor() {
    super();
    this.input = "Excella Input"
  }

  handleChange(e) {
    this.input = e.target.value;
  }

  render() {
    return html`
      <div>
        <label for="name">Name</label>
        <input id="name" value=${this.input} @input=${this.handleChange}/>
        <hello-greeting name=${this.input}></hello-greeting>
      </div>
    `;
  }
}

customElements.define('hello-world', HelloWorld);