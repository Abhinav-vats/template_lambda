import { AWSLambdaEvent } from "./interface/aws";
import { errorCatcher } from "./middleware/errorCatcher";
import router from "./routes/router";

export default async function index(event: AWSLambdaEvent, ctx, callback) {
    if(!ctx){
        ctx = {}
    }

    ctx = {
        ...ctx,
        statusCode: 200,
        isFound: false,
        response(responseBody = "OK"){
            this.isFound = true;
            const body = typeof responseBody ==="object"? JSON.stringify(responseBody): responseBody;
            callback(null, {
                statusCode: this.statusCode,
                body
            });
        }
    };

    await errorCatcher(router, event, ctx)
}