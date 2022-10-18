import { CustomError } from "./CustomError";

export class HttpNotFoundError extends CustomError{
    constructor(message?: string){
        if(!message){
            message = "Not Found"
        }

        super(message);
        this.code = "GNE-100404";
    }
}