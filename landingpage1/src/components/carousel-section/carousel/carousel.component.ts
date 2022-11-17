import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styles: [`
  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-details > .p-grid {
    border: 1px solid #b3c2ca;
    border-radius: 3px;
    margin: 0.3em;
    text-align: center;
    padding: 2em 0 2.25em 0;
  }
  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-title {
    font-weight: 700;
    font-size: 20px;
    margin-top: 24px;
  }
  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data .car-subtitle {
    margin: 0.25em 0 2em 0;
  }
  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button {
    margin-left: 0.5em;
  }
  .carousel-demo .ui-carousel .ui-carousel-content .ui-carousel-item .car-data button:first-child {
    margin-left: 0;
  }
  .carousel-demo .ui-carousel.custom-carousel .ui-carousel-dot-icon {
    width: 16px !important;
    height: 16px !important;
    border-radius: 50%;
  }
  .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-start .car-details > .p-grid {
    margin-left: 0.6em;
  }
  .carousel-demo .ui-carousel.ui-carousel-horizontal .ui-carousel-content .ui-carousel-item.ui-carousel-item-end .car-details > .p-grid {
    margin-right: 0.6em;
  }
`],
encapsulation: ViewEncapsulation.None
})
export class CarouselComponent implements OnInit {
@Input() carouselPage:string = '';
responsiveOptions;
  carouselItems;
  constructor() { 
    this.responsiveOptions = [
      {
        breakpoint: '1200px',
        numVisible: 1,
        numScroll: 1
    },
      {
          breakpoint: '992px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '576px',
          numVisible: 1,
          numScroll: 1
      },
      {
        breakpoint: '1px',
        numVisible: 1,
        numScroll: 1
    }
  ];
  }

  ngOnInit(): void {
    this.carouselItems = [
      {"title": "Ihe zuverlasssiger umzugsvermittler", 
      "text": "Up unpacked friendly ecstatic so possible humoured do. Ample end might set spoke her. We no am former valley assure. Four need spo Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
       "buttonLabel": "Anzeige Jetzt aufgenben",  "buttonSrc": "/register", "imgSrc": "assets/carousel-img.png"},
       {"title": "Ihe zuverlasssiger umzugsvermittler", 
       "text": "Up unpacked friendly ecstatic so possible humoured do. Ample end might set spoke her. We no am former valley assure. Four need spo Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        "buttonLabel": "Anzeige Jetzt aufgenben",  "buttonSrc": "/register", "imgSrc": "assets/carousel-img.png"},
        {"title": "Ihe zuverlasssiger umzugsvermittler", 
        "text": "Up unpacked friendly ecstatic so possible humoured do. Ample end might set spoke her. We no am former valley assure. Four need spo Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
         "buttonLabel": "Anzeige Jetzt aufgenben",  "buttonSrc": "/register", "imgSrc": "assets/carousel-img.png"},
         {"title": "Ihe zuverlasssiger umzugsvermittler", 
         "text": "Up unpacked friendly ecstatic so possible humoured do. Ample end might set spoke her. We no am former valley assure. Four need spo Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
          "buttonLabel": "Anzeige Jetzt aufgenben",  "buttonSrc": "/register", "imgSrc": "assets/carousel-img.png"}

    ]
  
}

}
