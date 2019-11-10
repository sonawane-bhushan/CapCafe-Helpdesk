import { order } from "./order";
import { RequestResponse } from "./RequestResponse";

export class Ticket{
    public ticketNumber : number;
    public status : string;
    public date : Date;
    public location : string;
    public order : order;
    public messages : RequestResponse
}