import { Component, OnInit } from '@angular/core';
import { CardWithBgComponent } from "../../shared/components/card-with-bg/card-with-bg.component";
import { CardWithoutBgComponent } from "../../shared/components/card-without-bg/card-without-bg.component";
import { CardWithoutBg } from '../../Core/Interfaces/cardWithoutBg.model';
import { title } from 'process';
import { CommonModule, NgFor} from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { OurCarComponent } from "../../shared/components/our-car/our-car.component";
import {QuotesService} from "../../Core/services/quotes-service.service"
import { Quote } from '../../Core/Classes/quotes';
import { getRandomInList} from '../../shared/pipes/get-random-in-list.pipe';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [CardWithBgComponent, CardWithoutBgComponent, NgFor, FormsModule, OurCarComponent, getRandomInList, getRandomInList],

})
export class HomeComponent implements OnInit {
  randomNumber: number=0;


  constructor(private quotesService: QuotesService) {}

  
  headerMessage: string="Say hi to join our family";
  Maindesc: string = "Get to know more about IND trucks and our wide range of choices for you";
  Maintitle: string="Truck";
  Image: string="./assets/truck-green.jpeg"
  Maindesc1: string = "The latest news from Volvo Trucks. Here you'll find stories, insights from industry experts, case studies and way more.";
  Maintitle1: string="News & insights";
  Image1: string="https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/volvo-fm-house-facade-sky?qlt=82&wid=1024&ts=1706380817090&dpr=off&fit=constrain"
  
  cardWithoutBgList: CardWithoutBg[] = [
    {
      title: "IND's electric trucks reach 80 million kilometers in five years",
      desc: "Volvo’s electric trucks have driven more than 80 million kilometers or 2,000 laps around the world since Volvo launched its first electric truck models in 2019. These trucks have reduced CO2 emissions and at the same time improved the working environment for drivers significantly.",
      image: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/volvo-trucks-S7A9007?size=1280,720&scl=1"
    },
    {
      title: "The new Volvo FH16: More power less fuel",
      desc: "The new Volvo FH16 is Europe’s most powerful truck but also a very fuel efficient one – and it can run on 100% renewable fuels. On-road tests confirm that the all-new engine in the FH16 achieves 5% better fuel economy and lower emissions while adding 7% more torque - a combination that increases efficiency and productivity for the most demanding transport",
      image: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/volvo-trucks-59A1644-PR?wid=1024"
    },
    {
      title: "Volvo to launch hydrogen-powered trucks",
      desc: "Volvo Trucks is developing trucks with combustion engines that run on hydrogen. On-road tests with trucks using hydrogen in combustion engines will begin in 2026, and the commercial launch is planned towards the end of this decade. Trucks that run on green hydrogen provide a significant step for Volvo to achieve its net zero goal and support customers to reach their decarbonization targets.",
      image: "https://assets.volvo.com/is/image/VolvoInformationTechnologyAB/h2-ice-still?wid=1024"
    }
  ];
  quotes: Quote[] = [];

 

  ngOnInit(): void {  
    this.quotesService.getQuotes().subscribe(data => this.quotes = data);
  }

  onClick(formData: any) {
    throw new Error('Method not implemented.');
    }
}
