import { html } from 'lit';
import '../src/lit-element.js';

export default {
  title: 'LitElement',
  component: 'lit-element',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <lit-element
      style="--lit-element-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </lit-element>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
