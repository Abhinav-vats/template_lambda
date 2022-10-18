import { AWSLambdaEvent } from "./aws";
import { Context } from "./context";

export interface IRoute {
    method: string;
    path: string;
    handler: (event: AWSLambdaEvent, ctx: Context, callback?:(body:Partial<object>)=>void)=> Promise<void>
}