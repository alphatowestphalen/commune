// acte-celibataire.interface.ts

export interface ActeCelibataireInterne {
  nomFkt: string;
  numCin: string;
  dateCin: string;
  lieuCin: string;
  idPremierCopie: string;
}
export interface ActeCelibataireExterne {
  nomFkt: string;
  numCin: string;
  dateCin: string;
  lieuCin: string;
  genre: string;
  nom: string;
  lieuDeNaiss: string;
  nomPere: string;
  nomMere: string;
  dateDeNaiss: string;
}
export interface ActeCelibataire {
  nomFkt: string;
  numCin: string;
  dateCin: string;
  lieuCin: string;
  genre: string;
  nom: string;
  lieuDeNaiss: string;
  nomPere: string;
  nomMere: string;
  dateDeNaiss: string;
  dateActe: string;
  idPremierCopie: string;
}
  