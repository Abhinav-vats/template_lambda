import { match } from "path-to-regexp";
import routes from ".";
import { HttpNotFoundError } from "../error/http/HttpNotFoundError";
import { AWSLambdaEvent } from "../interface/aws";
import { Context } from "../interface/context";
import { IRoute } from "../interface/route";

export default async (event: AWSLambdaEvent, ctx) => {
    for(const route of routes as IRoute[]){
        if(route.method === event.httpMethod){
            if(route.path === event.path || match(route.path, {decode: decodeURIComponent })(event.path)){
                await route.handler(event, ctx);
                break;
            }
        }
    }

    if(!ctx.isFound){
        throw new HttpNotFoundError()
    }
    
}

/*

"@typescript-eslint/eslint-plugin": "^5.35.1",
    "@typescript-eslint/parser": "^5.35.1",
    "eslint": "^8.22.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "prettier": "^2.7.1",
    "ts-jest": "^28.0.8",
    
    */