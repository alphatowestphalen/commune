// acte-celibataire.interface.ts

export interface ActeCelibataire {
    idActeCelibataire: string;
    nomFkt: string;
    numCin: string;
    dateCin: string;
    lieuCin: string;
    dateActe: string;
    premierecopie: any | null; // Le type dépend de ce que peut contenir cette propriété
    numero: number;
    annee: number;
    createdDate: string;
  }
  
  // my-data.interface.ts
  
  export interface MyData {
    page: number;
    totalPages: number;
    totalElements: number;
    data: ActeCelibataire[];
  }
  