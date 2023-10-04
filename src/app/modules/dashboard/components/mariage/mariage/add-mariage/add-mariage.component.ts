import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaireInterface, MariageInterface, MariageInterfaceExterneInterne, MariageInterfaceInterneExterne, MariageInterfaceInterneInterne} from 'src/app/model/mariage/MariageInterface.interface';
import { ObjectMariageService } from 'src/app/modules/dashboard/services/ObjectMariage.service';
import { MaireService } from 'src/app/modules/dashboard/services/maire.service';
import { MariageService } from 'src/app/modules/dashboard/services/mariage.service';
import { PremiereCopieService } from 'src/app/modules/dashboard/services/premiere-copie.service';

@Component({
  selector: 'app-add-mariage',
  templateUrl: './add-mariage.component.html',
  styleUrls: ['./add-mariage.component.css']
})
export class AddMariageComponent implements OnInit {
maires:MaireInterface[] = [];
premierCopieState : String;

mariageInterface:MariageInterface= {
  nomTemoinHomme: "John",
  prenomsTemoinHomme: "Doe",
  professionTemoinHomme: "Engineer",
  datenaissTemoinHomme: "1980-01-15",
  lieunaissTemoinHomme: "New York",
  adresseTemoinHomme: "123 Main St",
  nomTemoinFemme: "Jane",
  prenomsTemoinFemme: "Smith",
  professionTemoinFemme: "Doctor",
  datenaissTemoinFemme: "1985-05-20",
  lieunaissTemoinFemme: "Los Angeles",
  adresseTemoinFemme: "456 Elm St",
  description: "A beautiful wedding ceremony",
  numeroCopieMariage: "1",
  dateMariage: "2023-09-18",
  heureMariage: "15:00",
  idMaire: "",
  nationaliteHomme: "US",
  idPremierCopieHomme: "3",
  nomHomme: "Michael",
  prenomsHomme: "Johnson",
  professionHomme: "Accountant",
  dateNaissHomme: "1990-03-10",
  lieuNaissHomme: "Chicago",
  adresseHomme: "789 Oak St",
  typeHomme: "Groom",
  idPereHomme: 2,
  nomPereHomme: "David",
  prenomsPereHomme: "Johnson",
  dateNaissPereHomme: "1960-07-25",
  lieuNaissPereHomme: "Houston",
  professionPereHomme: "Businessman",
  adressePereHomme: "101 Pine St",
  idMereHomme: 3,
  nomMereHomme: "Lisa",
  prenomsMereHomme: "Johnson",
  dateNaissMereHomme: "1965-11-30",
  lieuNaissMereHomme: "Miami",
  professionMereHomme: "Teacher",
  adresseMereHomme: "202 Cedar St",
  idPremierCopieFemme: "1",
  nationaliteFemme: "US",
  nomFemme: "Emily",
  prenomsFemme: "Anderson",
  professionFemme: "Lawyer",
  dateNaissFemme: "1992-04-05",
  lieuNaissFemme: "San Francisco",
  adresseFemme: "303 Maple St",
  idPereFemme: 1,
  nomPereFemme: "William",
  prenomsPereFemme: "Anderson",
  dateNaissPereFemme: "1958-09-12",
  lieuNaissPereFemme: "Seattle",
  professionPereFemme: "Doctor",
  adressePereFemme: "404 Birch St",
  idMereFemme: 2,
  nomMereFemme: "Sarah",
  prenomsMereFemme: "Anderson",
  dateNaissMereFemme: "1960-12-18",
  lieuNaissMereFemme: "Denver",
  professionMereFemme: "Nurse",
  adresseMereFemme: "505 Willow St"
}

mariageInterfaceInterneInterne:MariageInterfaceInterneInterne ={
      nomTemoinHomme: "",
      prenomsTemoinHomme: "",
      professionTemoinHomme: "",
      datenaissTemoinHomme: "",
      lieunaissTemoinHomme: "",
      adresseTemoinHomme: "",
      nomTemoinFemme: "",
      prenomsTemoinFemme: "",
      professionTemoinFemme: "",
      datenaissTemoinFemme: "",
      lieunaissTemoinFemme: "",
      adresseTemoinFemme: "",
      description: "",
      numeroCopieMariage: "",
      dateMariage: "",
      heureMariage: "",
      idMaire: "",
      idPremierCopieHomme: "",
      idPremierCopieFemme: "",
}

mariageInterfaceInterneExterne:MariageInterfaceInterneExterne ={
  nomTemoinHomme: "",
  prenomsTemoinHomme: "",
  professionTemoinHomme: "",
  datenaissTemoinHomme: "",
  lieunaissTemoinHomme: "",
  adresseTemoinHomme: "",
  nomTemoinFemme: "",
  prenomsTemoinFemme: "",
  professionTemoinFemme: "",
  datenaissTemoinFemme: "",
  lieunaissTemoinFemme: "",
  adresseTemoinFemme: "",
  description: "",
  numeroCopieMariage: "",
  dateMariage: "",
  heureMariage: "",
  idMaire: "",
  idPremierCopieHomme: "",
  nationaliteFemme: "",
  nomFemme: "",
  prenomsFemme: "",
  professionFemme: "",
  dateNaissFemme: "",
  lieuNaissFemme: "",
  adresseFemme: "",
  typeFemme: "",
  nomPereFemme: "",
  prenomsPereFemme: "",
  dateNaissPereFemme: "",
  lieuNaissPereFemme: "",
  professionPereFemme: "",
  adressePereFemme: "",
  nomMereFemme: "",
  prenomsMereFemme: "",
  dateNaissMereFemme: "",
  lieuNaissMereFemme: "",
  professionMereFemme: "",
  adresseMereFemme: ""
}

mariageIterfaceExterneInterne:MariageInterfaceExterneInterne ={
  nomTemoinHomme: "",
  prenomsTemoinHomme: "",
  professionTemoinHomme: "",
  datenaissTemoinHomme: "",
  lieunaissTemoinHomme: "",
  adresseTemoinHomme: "",
  nomTemoinFemme: "",
  prenomsTemoinFemme: "",
  professionTemoinFemme: "",
  datenaissTemoinFemme: "",
  lieunaissTemoinFemme: "",
  adresseTemoinFemme: "",
  description: "",
  numeroCopieMariage: "",
  dateMariage: "",
  heureMariage: "",
  idMaire: "",
  idPremierCopieFemme: "",
  nationaliteHomme: "",
  nomHomme: "",
  prenomsHomme: "",
  professionHomme: "",
  dateNaissHomme: "",
  lieuNaissHomme: "",
  adresseHomme: "",
  nomPereHomme: "",
  prenomsPereHomme: "",
  dateNaissPereHomme: "",
  lieuNaissPereHomme: "",
  professionPereHomme: "",
  adressePereHomme: "",
  nomMereHomme: "",
  prenomsMereHomme: "",
  dateNaissMereHomme: "",
  lieuNaissMereHomme: "",
  professionMereHomme: "",
  adresseMereHomme: ""
}

premierCopiers:any;
optionCopieHomme:boolean = false;
size = 5;
page = 1;
idCopier:string;
typeHomme:string = "";
typeFemme:string = "";
interfaces:any[] = [];

  constructor(private maireService:MaireService,private premierecopie: PremiereCopieService, private activeRoute: ActivatedRoute, private route:Router , private premierCopier:PremiereCopieService, private mariageService: MariageService, private objectMariage:ObjectMariageService) { }

  ngOnInit() {
    this.getParamse();
    this.getAllMaire();
    // this.getAllPremierCopier(this.size,this.page);
  }

  getAllMaire() {
    this.maireService.getAllMaire().subscribe(data => {
      this.maires = data;
    });
  }
  getParamse(){
    this.activeRoute.paramMap.subscribe(param => {
      this.mariageInterfaceInterneInterne.idPremierCopieHomme = param.get('id');
      console.log('====================================');
      console.log(this.mariageInterfaceInterneInterne.idPremierCopieHomme);
      console.log('====================================');
    })
  }

  // public getAllPremierCopier(size:number,page:number){
  //   this.premierCopier.getCertificates(size, page).subscribe(data => {
  //     this.premierCopiers = data.data;
  //   });
  // }

  public getAllPremierCopierFemme(){
    // recherche fille
    this.premierCopier.getCelibataireWithSexe(this.size, this.page,"fille").subscribe(data => {
      console.log('=================getAllPremierCopierFemme===================');
      console.log(data.data);
      console.log('====================================');
      this.premierCopiers = data.data;
    });
  }

  public getAllPremierCopierHomme(){
    // recherche garcon
    this.premierCopier.getCelibataireWithSexe(this.size, this.page,"garcon").subscribe(data => {
      this.premierCopiers = data.data;
    });
  }

  ClickOptionCopierHome(){
    this.optionCopieHomme = !this.optionCopieHomme;
  }

  onSelectChange(value:string){
    this.typeHomme = value;
    console.log(value);
    if(value ==="interne" && this.premierCopieState !== "homme"){
      this.getAllPremierCopierHomme();
      this.premierCopieState = "homme";
    }
  }

  selectTypeFemme(value:string){
    this.typeFemme=value;
    console.log(this.typeFemme);
    
    if(value ==="interne" && this.premierCopieState !== "femme"){
      this.getAllPremierCopierFemme();
      this.premierCopieState = "femme";
    }
  }
  sauvegarderMariage(){
    this.objectMariage.InterneInterne(this.mariageInterface,this.mariageInterfaceInterneInterne);
    if (this.typeHomme == "interne" && this.typeFemme == "interne") {
      this.mariageService.addMariage(this.mariageInterfaceInterneInterne,this.typeFemme,this.typeHomme).subscribe(data =>{
        this.route.navigate(['/dashboard/mariage-list']);
      });      
    }
    else if  (this.typeHomme == "interne" && this.typeFemme == "externe") {
      this.mariageService.addMariage(this.mariageInterfaceInterneExterne,this.typeHomme,this.typeFemme).subscribe(data =>{
        this.route.navigate(['/dashboard/mariage-list']);
      });      
    }
    else if(this.typeHomme == "externe" && this.typeFemme == "interne"){
      this.mariageService.addMariage(this.mariageIterfaceExterneInterne,this.typeFemme,this.typeHomme).subscribe(data =>{
        this.route.navigate(['/dashboard/mariage-list']);
      });      
    }
    else if(this.typeFemme == "externe" && this.typeHomme == "externe"){
      this.mariageService.addMariage(this.mariageInterface,this.typeFemme,this.typeHomme).subscribe(data =>{
        this.route.navigate(['/dashboard/mariage-list']);
      });      
    }

  }
}
