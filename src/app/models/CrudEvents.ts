export class Event {
  id  : number;
  id_client : number;
  id_user : number;
  id_eventt : number;
  nom : String;
  prenom : String;
  adresse : String;
  num : String;
  email : String;
  id_region : number;
  id_ville : number;
  societe : String;
  nbr_invit : number;
  date_event : any;
  type_event : any;
  rapport : String;
  message : String;
  rep_tele : String;
  id_role_user : number;
  besoin_role_user : String;
  budget : any;
  qualite_eventt : String;
  is_active : number;
  createdat : any;

}
export interface creeeventsResponse  {
  count: number  ;
  events: Event[]
};
