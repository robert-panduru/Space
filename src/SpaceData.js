import { LitElement, html, css } from 'lit-element';

class SpaceData extends LitElement {
  static get styles() {
    return css`
      :host {
        background: lightblue;
        display: block;
        padding: 1rem;
      }
    `;
  }

  static get properties() {
    return {
      lat: { type: Number },
      lon: { type: Number },
      place: { type: String },
    };
  }

  render() {
    return html`
      <div>Lat: <output>${this.lat}</output></div>
      <div>Lon: <output>${this.lon}</output></div>
      <div>Place: <span>${this.place}</span></div>
    `;
  }
}

window.customElements.define('space-data', SpaceData);