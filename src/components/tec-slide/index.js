import { LitElement, html } from 'lit';
import {bootstrapStyles} from '@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js';

export class TecSlide extends LitElement {

    static get styles() {
        return [bootstrapStyles];
    }

    static get properties() {
      return {
        largura: { type: Number },
        altura: { type: Number },
        listaDeSlides: []
      };
    }

    constructor(){
        super();
        this.activeSlide = '';
        this.urlImage = '';
        this.altura = 0;
        this.largura = 0;
        this.listaDeSlides = [];

    }

    proximo() {
      let slideAtivo = '';
        let slides = this.shadowRoot.querySelectorAll('.carousel-item');
        slides.forEach(slide=>{
          if (slide.classList.contains('active')) {
            slideAtivo =  slide;
          }
        });

        this.mudarSlide(slideAtivo, 1);
    }

    anterior() {
      let slideAtivo = '';
        let slides = this.shadowRoot.querySelectorAll('.carousel-item');
        slides.forEach(slide=>{
          if (slide.classList.contains('active')) {
            slideAtivo =  slide;
          }
        });

        this.mudarSlide(slideAtivo, 0);
    }

    mudarSlide(slideAtivo, tipoBotao) {
    if (tipoBotao = 1) {
      switch (slideAtivo.id) {
        case 'one':
            this.shadowRoot.querySelector('#one').classList.remove('active');
            this.shadowRoot.querySelector('#two').classList.add('active');
          break;
        case 'two':
            this.shadowRoot.querySelector('#two').classList.remove('active');
            this.shadowRoot.querySelector('#three').classList.add('active');
          break;
      case 'three':
            this.shadowRoot.querySelector('#three').classList.remove('active');
            this.shadowRoot.querySelector('#one').classList.add('active');
          break;
        default:
          break;
      }
    } else {
      switch (slideAtivo.id) {
        case 'one':
            this.shadowRoot.querySelector('#one').classList.remove('active');
            this.shadowRoot.querySelector('#three').classList.add('active');
          break;
        case 'two':
            this.shadowRoot.querySelector('#two').classList.remove('active');
            this.shadowRoot.querySelector('#one').classList.add('active');
          break;
      case 'three':
            this.shadowRoot.querySelector('#three').classList.remove('active');
            this.shadowRoot.querySelector('#two').classList.add('active');
          break;
        default:
          break;
      }
    }
  }

    render() {
        return html`
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style="max-height: ${this.altura}px; max-width: ${this.largura}px;">
              <ol class="carousel-indicators">
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item ${this.activeSlide} active" id="one">
                  <img style="max-height: ${this.altura}px; max-width: ${this.largura}px; " src="https://vaadin.com/static/content/learning-center/learn/tutorials/lit-element/images/lit-element-thumbnail.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </div>
                </div>
                <div class="carousel-item ${this.activeSlide}" id="two">
                  <img style="max-height: ${this.altura}px; max-width: ${this.largura}px; " src="https://www.arsys.es/blog/file/uploads/2019/07/litelement.jpg" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </div>
                <div class="carousel-item ${this.activeSlide}" id="three">
                  <img style="max-height: ${this.altura}px; max-width: ${this.largura}px; " src="https://dval.dev/_nuxt/image/56dbf8.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </div>
                </div>
              </div>
              <a @click=${(event)=>this.anterior(event)} class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </a>
              <a @click=${(event)=>this.proximo(event)} class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </a>
            </div>
        `;
    }
}
customElements.define('tec-slide', TecSlide);
