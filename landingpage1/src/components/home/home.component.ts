import { Component, OnInit } from '@angular/core';
import { AuthenticateService} from "../../services/remote/authenticate/authenticate.service";
import {CardOneInterface} from './../../models/CardOne';
import {CardTwoInterface} from './../../models/CardTwo';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
  };

  focus;
  focus1;

  constructor(private  authenticateService: AuthenticateService) {
   }

   cardOneData: CardOneInterface = {
    image: 'assets/aktuell-img1.png',
    title: 'Job post title goes here',
    text: 'The simplest ever email marketing tool allows you to choose from a number of pre-built layouts. BoldInbox',
    buttonsInfoLabels:['ntfemung 13 KM', 'Dauer 2 STD', 'Datyn 21.04.2020', 'Loc: Base,Switzerland'],
    buttonLink: '/register',
    buttonLabel: 'Bewerben'
   }

   cardTwoData: CardOneInterface = {
    image: 'assets/aktuell-img2.png',
    title: 'Job post title goes here',
    text: 'The simplest ever email marketing tool allows you to choose from a number of pre-built layouts. BoldInbox',
    buttonsInfoLabels:['ntfemung 13 KM', 'Dauer 2 STD', 'Datyn 21.04.2020', 'Loc: Base,Switzerland'],
    buttonLink: '/register',
    buttonLabel: 'Bewerben'
   }

   cardThreeData: CardOneInterface = {
    image: 'assets/aktuell-img3.png',
    title: 'Job post title goes here',
    text: 'The simplest ever email marketing tool allows you to choose from a number of pre-built layouts. BoldInbox',
    buttonsInfoLabels:['ntfemung 13 KM', 'Dauer 2 STD', 'Datyn 21.04.2020', 'Loc: Base,Switzerland'],
    buttonLink: '/register',
    buttonLabel: 'Bewerben'
   }

  cardPriceData: CardTwoInterface = {
    image: 'assets/price-img1.jpg',
    title: 'Bis 2 Std $25 pauschal pro helfer zzgl',
    description: 'description',
    text: 'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen',
   }

   cardPriceDataTwo: CardTwoInterface = {
    image: 'assets/price-img2.jpg',
    title: 'Ab 3 Std mind $10/std pauschal pro helfer zzgl',
    description: 'Vermittlungsgebuhr',
    text: 'The simplest ever email marketing tool allows y ou to choose from a number of pre-built layouts. BoldInbox What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley',
   }



  cards = [];
  cardsPriese = [];
   
  ngOnInit() {
    this.cards = [this.cardOneData, this.cardTwoData, this.cardThreeData];
    this.cardsPriese = [this.cardPriceData, this.cardPriceDataTwo]


  }

  isUserLoggedIn(){
    return this.authenticateService.isLoggedIn();
  }
  logout(){
    this.authenticateService.logout();
  }
}
