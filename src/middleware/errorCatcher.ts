import { CustomError } from "../error/http/CustomError";
import { Context } from "../interface/context";

export async function errorCatcher(next, event, ctx: Context){
    try{
        await next(event, ctx);
    }catch(err){
        let statusCode = 500;
        let responseBody = {
            errorCode: "GNE-00001",
            errorMessage: "Internal Server Error"
        }

        if(err instanceof CustomError){
            responseBody.errorCode = err.code;
            responseBody.errorMessage = err.message;
        }

        ctx.statusCode = statusCode;
        ctx.response(JSON.stringify(responseBody));
    }
}