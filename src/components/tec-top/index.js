import { LitElement, html } from 'lit';
import {bootstrapStyles} from '@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js';

export class TecTop extends LitElement {
    static get styles() {
        return [bootstrapStyles];
    }

    render() {
        return html`
            <h2>TEC.LIT-BASE<span class="badge"><H5>TECINOVA.NET</H5></span></h2>
        `;
    }
}
customElements.define('tec-top', TecTop);
