export interface Autobus {
  matricula: string;
  aFabricacion: number;
  visitas:Visitas[];
}

interface Visitas {
  id:number;
  fecha:Date;
  matricula:string;
  dni:string;
  idLugar:number;
}