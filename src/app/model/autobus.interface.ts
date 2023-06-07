export interface Autobus {
  matricula: string;
  aFabricacion: number;
  visitas:Visitas[];
}

interface Visitas {
  id:number;
  fecha:Date;
  matricula:Autobus;
  dni:Conductor;
  lugar:Lugar;
}

interface Conductor {
  dni:string;
  nombre:string;
}

interface Lugar {
  idLugar:number;
  nombre:string;
}