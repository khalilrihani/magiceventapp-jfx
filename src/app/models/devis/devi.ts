

export interface DeviModelServer {
  id:Number ;
  id_client:Number ;
  id_service:Number ;
  id_eventt:Number ;
  date_reser : any ;
  nbr_jours:Number ;
  prix : any ;
  avance : any ;
  verif : number ;
  paye_avance : any ;
  paye :  any ;
  is_active: Number ;
  created_at : any ;




}


export interface serverResponse  {
  count: number;
  devis: DeviModelServer[]
};
