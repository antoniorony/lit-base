import { LitElement, html } from 'lit';
import {bootstrapStyles} from '@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js';

export class TecTop extends LitElement {
    static get styles() {
        return [bootstrapStyles];
    }

    static get properties() {
        return {
            urlLinkTopo: { type: String },
            tipoTargetLinkTopo: { type: String },
        };
    }

    constructor() {
        super();
        this.urlLinkTopo = '';
        this.tipoTargetLinkTopo = '';
    }

    render() {
        return html`
        <div class="d-flex justify-content-center">
            <h3>Projeto base em lit element com bootstrap</h3>
        </div>
        <div class="d-flex justify-content-center">
            <a class="nav-link" aria-disabled="false" href="${this.urlLinkTopo}" target="${this.tipoTargetLinkTopo}">TECINOVA.NET</a>
        </div>
        `;
    }
}
customElements.define('tec-top', TecTop);
