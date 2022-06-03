import { LitElement, html } from 'lit';
import {bootstrapStyles} from '@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js';
import '../../components/tec-menu/index.js';
import '../../components/tec-top/index.js'
import '../../components/tec-slide/index.js';

export class Home extends LitElement {
    static get styles() {
        return [bootstrapStyles];
    }

    render() {
        return html`
            <div class="container-fluid">
                <tec-top></tec-top>
                <tec-menu></tec-menu>
                <tec-slide></tec-slide>
            </div>
        `;
    }
}
customElements.define('tec-home', Home);
