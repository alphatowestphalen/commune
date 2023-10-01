import { Injectable } from '@angular/core';
import { ActeCelibataire, ActeCelibataireExterne, ActeCelibataireInterne } from 'src/app/model/acteCelibataire/ActeCelibataire.interface';

@Injectable({
  providedIn: 'root'
})
export class ActeCellibataireService {

constructor() { }

public ActeExterne(acteCelibataire: ActeCelibataire, acteCelibataireExterne: ActeCelibataireExterne): ActeCelibataireExterne {
  acteCelibataireExterne.nomFkt = acteCelibataire.nomFkt;
  acteCelibataireExterne.numCin = acteCelibataire.numCin;
  acteCelibataireExterne.dateCin = acteCelibataire.dateCin;
  acteCelibataireExterne.lieuCin = acteCelibataire.lieuCin;
  acteCelibataireExterne.genre = acteCelibataire.genre;
  acteCelibataireExterne.nom = acteCelibataire.nom;
  acteCelibataireExterne.lieuDeNaiss = acteCelibataire.lieuDeNaiss;
  acteCelibataireExterne.nomPere = acteCelibataire.nomPere;
  acteCelibataireExterne.nomMere = acteCelibataire.nomMere;
  acteCelibataireExterne.dateDeNaiss = acteCelibataire.dateDeNaiss;
  return acteCelibataireExterne
}

public ActeInterne(acteCelibataire: ActeCelibataire, acteCelibataireInterne: ActeCelibataireInterne): ActeCelibataireInterne {
  acteCelibataireInterne.nomFkt = acteCelibataire.nomFkt;
  acteCelibataireInterne.numCin = acteCelibataire.numCin;
  acteCelibataireInterne.dateCin = acteCelibataire.dateCin;
  acteCelibataireInterne.lieuCin = acteCelibataire.lieuCin;
  acteCelibataireInterne.idPremierCopie = acteCelibataire.idPremierCopie;
  return acteCelibataireInterne;
}

}
