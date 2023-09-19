import { Injectable } from '@angular/core';
import { MariageInterface, MariageInterfaceExterneInterne, MariageInterfaceInterneExterne, MariageInterfaceInterneInterne } from 'src/app/model/mariage/MariageInterface.interface';

@Injectable({
  providedIn: 'root'
})
export class ObjectMariageService {

  constructor() { }
  public InterneInterne(mariageInterface: MariageInterface, mariageInterfaceInterneInterne: MariageInterfaceInterneInterne): MariageInterfaceInterneInterne {
    mariageInterfaceInterneInterne.nomTemoinHomme = mariageInterface.nomTemoinHomme;
    mariageInterfaceInterneInterne.prenomsTemoinHomme = mariageInterface.prenomsTemoinHomme;
    mariageInterfaceInterneInterne.professionTemoinHomme = mariageInterface.professionTemoinHomme;
    mariageInterfaceInterneInterne.datenaissTemoinHomme = mariageInterface.datenaissTemoinHomme;
    mariageInterfaceInterneInterne.lieunaissTemoinHomme = mariageInterface.lieunaissTemoinHomme;
    mariageInterfaceInterneInterne.adresseTemoinHomme = mariageInterface.adresseTemoinHomme;
    mariageInterfaceInterneInterne.nomTemoinFemme = mariageInterface.nomTemoinFemme;
    mariageInterfaceInterneInterne.prenomsTemoinFemme = mariageInterface.prenomsTemoinFemme;
    mariageInterfaceInterneInterne.professionTemoinFemme = mariageInterface.professionTemoinFemme;
    mariageInterfaceInterneInterne.datenaissTemoinFemme = mariageInterface.datenaissTemoinFemme;
    mariageInterfaceInterneInterne.lieunaissTemoinFemme = mariageInterface.lieunaissTemoinFemme;
    mariageInterfaceInterneInterne.adresseTemoinFemme = mariageInterface.adresseTemoinFemme;
    mariageInterfaceInterneInterne.description = mariageInterface.description;
    mariageInterfaceInterneInterne.numeroCopieMariage = mariageInterface.numeroCopieMariage;
    mariageInterfaceInterneInterne.dateMariage = mariageInterface.dateMariage;
    mariageInterfaceInterneInterne.heureMariage = mariageInterface.heureMariage;
    mariageInterfaceInterneInterne.idMaire = mariageInterface.idMaire;
    mariageInterfaceInterneInterne.idPremierCopieHomme = mariageInterface.idPremierCopieHomme;
    mariageInterfaceInterneInterne.idPremierCopieFemme = mariageInterface.idPremierCopieFemme;

    return mariageInterfaceInterneInterne
  }

  public InterneExterne(mariageInterface: MariageInterface, mariageInterfaceInterneExterne: MariageInterfaceInterneExterne): MariageInterfaceInterneExterne {
    mariageInterfaceInterneExterne.nomTemoinHomme = mariageInterface.nomTemoinHomme;
    mariageInterfaceInterneExterne.prenomsTemoinHomme = mariageInterface.prenomsTemoinHomme;
    mariageInterfaceInterneExterne.professionTemoinHomme = mariageInterface.professionTemoinHomme;
    mariageInterfaceInterneExterne.datenaissTemoinHomme = mariageInterface.datenaissTemoinHomme;
    mariageInterfaceInterneExterne.lieunaissTemoinHomme = mariageInterface.lieunaissTemoinHomme;
    mariageInterfaceInterneExterne.adresseTemoinHomme = mariageInterface.adresseTemoinHomme;
    mariageInterfaceInterneExterne.nomTemoinFemme = mariageInterface.nomTemoinFemme;
    mariageInterfaceInterneExterne.prenomsTemoinFemme = mariageInterface.prenomsTemoinFemme;
    mariageInterfaceInterneExterne.professionTemoinFemme = mariageInterface.professionTemoinFemme;
    mariageInterfaceInterneExterne.datenaissTemoinFemme = mariageInterface.datenaissTemoinFemme;
    mariageInterfaceInterneExterne.lieunaissTemoinFemme = mariageInterface.lieunaissTemoinFemme;
    mariageInterfaceInterneExterne.adresseTemoinFemme = mariageInterface.adresseTemoinFemme;
    mariageInterfaceInterneExterne.description = mariageInterface.description;
    mariageInterfaceInterneExterne.numeroCopieMariage = mariageInterface.numeroCopieMariage;
    mariageInterfaceInterneExterne.dateMariage = mariageInterface.dateMariage;
    mariageInterfaceInterneExterne.heureMariage = mariageInterface.heureMariage;
    mariageInterfaceInterneExterne.idMaire = mariageInterface.idMaire;
    mariageInterfaceInterneExterne.idPremierCopieHomme = mariageInterface.idPremierCopieHomme;
    mariageInterfaceInterneExterne.nationaliteFemme = mariageInterface.nationaliteFemme;
    mariageInterfaceInterneExterne.adresseFemme = mariageInterface.adresseFemme;
    mariageInterfaceInterneExterne.nomFemme = mariageInterface.nomFemme;
    mariageInterfaceInterneExterne.prenomsFemme = mariageInterface.prenomsFemme;
    mariageInterfaceInterneExterne.professionFemme = mariageInterface.professionFemme;
    mariageInterfaceInterneExterne.dateNaissFemme = mariageInterface.dateNaissFemme;
    mariageInterfaceInterneExterne.lieuNaissFemme = mariageInterface.lieuNaissFemme;
    mariageInterfaceInterneExterne.idPereFemme = mariageInterface.idPereFemme;
    mariageInterfaceInterneExterne.nomPereFemme = mariageInterface.nomPereFemme;
    mariageInterfaceInterneExterne.prenomsPereFemme = mariageInterface.prenomsPereFemme;
    mariageInterfaceInterneExterne.dateNaissPereFemme = mariageInterface.dateNaissPereFemme;
    mariageInterfaceInterneExterne.lieuNaissPereFemme = mariageInterface.lieuNaissPereFemme;
    mariageInterfaceInterneExterne.professionPereFemme = mariageInterface.professionPereFemme;
    mariageInterfaceInterneExterne.adressePereFemme = mariageInterface.adressePereFemme;
    mariageInterfaceInterneExterne.idMereFemme = mariageInterface.idMereFemme;
    mariageInterfaceInterneExterne.nomMereFemme = mariageInterface.nomMereFemme;
    mariageInterfaceInterneExterne.prenomsMereFemme = mariageInterface.prenomsMereFemme;
    mariageInterfaceInterneExterne.dateNaissMereFemme = mariageInterface.dateNaissMereFemme;
    mariageInterfaceInterneExterne.lieuNaissMereFemme = mariageInterface.lieuNaissMereFemme;
    mariageInterfaceInterneExterne.professionMereFemme = mariageInterface.professionMereFemme;
    mariageInterfaceInterneExterne.adresseMereFemme = mariageInterface.adresseMereFemme;
    return mariageInterfaceInterneExterne;
  }

  public ExterneInterne(mariageInterface:MariageInterface, mariageInterfaceExterneInterne:MariageInterfaceExterneInterne):MariageInterfaceExterneInterne{
    mariageInterfaceExterneInterne.nomTemoinHomme = mariageInterface.nomTemoinHomme;
    mariageInterfaceExterneInterne.prenomsTemoinHomme = mariageInterface.prenomsTemoinHomme;
    mariageInterfaceExterneInterne.professionTemoinHomme = mariageInterface.professionTemoinHomme;
    mariageInterfaceExterneInterne.datenaissTemoinHomme = mariageInterface.datenaissTemoinHomme;
    mariageInterfaceExterneInterne.lieunaissTemoinHomme = mariageInterface.lieunaissTemoinHomme;
    mariageInterfaceExterneInterne.adresseTemoinHomme = mariageInterface.adresseTemoinHomme;
    mariageInterfaceExterneInterne.nomTemoinFemme = mariageInterface.nomTemoinFemme;
    mariageInterfaceExterneInterne.prenomsTemoinFemme = mariageInterface.prenomsTemoinFemme;
    mariageInterfaceExterneInterne.professionTemoinFemme = mariageInterface.professionTemoinFemme;
    mariageInterfaceExterneInterne.datenaissTemoinFemme = mariageInterface.datenaissTemoinFemme;
    mariageInterfaceExterneInterne.lieunaissTemoinFemme = mariageInterface.lieunaissTemoinFemme;
    mariageInterfaceExterneInterne.adresseTemoinFemme = mariageInterface.adresseTemoinFemme;
    mariageInterfaceExterneInterne.description = mariageInterface.description;
    mariageInterfaceExterneInterne.numeroCopieMariage = mariageInterface.numeroCopieMariage;
    mariageInterfaceExterneInterne.dateMariage = mariageInterface.dateMariage;
    mariageInterfaceExterneInterne.heureMariage = mariageInterface.heureMariage;
    mariageInterfaceExterneInterne.idMaire = mariageInterface.idMaire;
    mariageInterfaceExterneInterne.nationaliteHomme = mariageInterface.nationaliteHomme;
    mariageInterfaceExterneInterne.adresseHomme = mariageInterface.adresseHomme;
    mariageInterfaceExterneInterne.nomHomme = mariageInterface.nomHomme;
    mariageInterfaceExterneInterne.prenomsHomme = mariageInterface.prenomsHomme;
    mariageInterfaceExterneInterne.professionHomme = mariageInterface.professionHomme;
    mariageInterfaceExterneInterne.dateNaissHomme = mariageInterface.dateNaissHomme;
    mariageInterfaceExterneInterne.lieuNaissHomme = mariageInterface.lieuNaissHomme;
    mariageInterfaceExterneInterne.idPereHomme = mariageInterface.idPereHomme;
    mariageInterfaceExterneInterne.nomPereHomme = mariageInterface.nomPereHomme;
    mariageInterfaceExterneInterne.prenomsPereHomme = mariageInterface.prenomsPereHomme;
    mariageInterfaceExterneInterne.dateNaissPereHomme = mariageInterface.dateNaissPereHomme;
    mariageInterfaceExterneInterne.lieuNaissPereHomme = mariageInterface.lieuNaissPereHomme;
    mariageInterfaceExterneInterne.professionPereHomme = mariageInterface.professionPereHomme;
    mariageInterfaceExterneInterne.adressePereHomme = mariageInterface.adressePereHomme;
    mariageInterfaceExterneInterne.idMereHomme = mariageInterface.idMereHomme;
    mariageInterfaceExterneInterne.nomMereHomme = mariageInterface.nomMereHomme;
    mariageInterfaceExterneInterne.prenomsMereHomme = mariageInterface.prenomsMereHomme;
    mariageInterfaceExterneInterne.dateNaissMereHomme = mariageInterface.dateNaissMereHomme;
    mariageInterfaceExterneInterne.lieuNaissMereHomme = mariageInterface.lieuNaissMereHomme;
    mariageInterfaceExterneInterne.professionMereHomme = mariageInterface.professionMereHomme;
    mariageInterfaceExterneInterne.adresseMereHomme = mariageInterface.adresseMereHomme;
    
    return mariageInterfaceExterneInterne;
  }
}
