import { LitElement, html } from 'lit';
import {bootstrapStyles} from '@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js';
import '../../components/tec-menu/index.js';
import '../../components/tec-top/index.js'
import '../../components/tec-slide/index.js';

export class Home extends LitElement {
    static get styles() {
        return [bootstrapStyles];
    }

    constructor() {
        super();
        this.urlLinkTopo = 'https://tecinova.net/';
        this.targetLink = '_blank';
    }

    render() {
        return html`
            <div class="container-fluid">
                <tec-top 
                    .urlLinkTopo=${this.urlLinkTopo}
                    .tipoTargetLinkTopo=${this.targetLink}
                ></tec-top>
                <tec-menu></tec-menu>
                <div class="row">
                    <div class="col-5">
                        <tec-slide
                            .largura=${500}  
                            .altura=${200}
                        ></tec-slide>
                    </div>
                    <div class="col-5">
                        <tec-slide
                            .largura=${500}
                            .altura=${200}
                        ></tec-slide>
                    </div>

                </div>
                
            </div>
        `;
    }
}
customElements.define('tec-home', Home);
