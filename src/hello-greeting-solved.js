import { LitElement, html, css } from 'lit';

class HelloGreeting extends LitElement {
  static properties = {
    name: { type: String },
  }

  static styles = css`
    :host {
      color: navy;
    }
  `;

  constructor() {
    super();
    this.name = 'Excella';
  }

  render() {
    return html`
      <p>Hello, ${this.name}!</p>
    `;
  }
}

customElements.define('hello-greeting', HelloGreeting);