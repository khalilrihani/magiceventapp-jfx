 export class Events {
   id  : number;
   nom : String;
   description : String;
   photo : String;
   is_active : any;
   createdat : any;

}
 export interface eventsResponse  {
   count: number  ;
   events: Events[]
 };
