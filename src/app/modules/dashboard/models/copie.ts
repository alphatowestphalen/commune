export interface Copie {
    idPremierCopie: number,
    description: string,
    mention: string,
    datePCopie: string,
    datePremierCopie: string,
    declarant: {
      idDeclarant: number,
      nomDeclarant: string,
      prenomsDeclarant: string,
      datenaissDeclarant: string,
      professionDeclarant: string,
      lieuNaissDeclarant: string,
      adressDeclarant: string
    },
    maire: {
      idMaire: number,
      nomMaire: string,
      prenomsMaire: string,
      fonction: string
    },
    mere: {
      idMere: number,
      nomMere: string,
      prenomsMere: string,
      datenaissMere: string,
      professionMere: string,
      adresseMere: string,
      lieuNaissMere: string
    },
    pere: {
      idPere: number,
      nomPere: string,
      prenomsPere: string,
      datenaissPere: string,
      professionPere: string,
      adressePere: string,
      lieuNaissPere: string
    },
    enfant: {
      idEnfant: number,
      nomEnfant: string,
      prenomsEnfant: string,
      datenaissEnfant: string,
      lieunaissEnfant: string,
      heurenaissEnfant: string,
      sexeEnfant: string,
      dateEnfant: string
    },
}