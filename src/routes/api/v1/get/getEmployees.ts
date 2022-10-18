import { IRoute } from "../../../../interface/route";
import { instance } from "../../../../util/AxiosInterceptor";
import fetch from 'node-fetch'
import { getSecret } from "../../../../util/SecretReaderUtil";
import { AxiosRequestConfig } from "axios";
export const getEmployee: IRoute = {
    method: "GET",
    path: "",
    handler: async function (event, ctx) {

        let secret =await getSecret.secretReader("My_secret", true)

        const config: AxiosRequestConfig = {
            method: "POST",
            data: event.body,
            headers:{

            }
        }

        const res = await instance.post("https://"+secret["host"]+"/json", config).then(res=> res).catch(err=> err.response)
        console.log(JSON.stringify(res.data))
        ctx.response(JSON.stringify(res.data))

        // const res = await fetch("https://httpbin.org/json")
        // ctx.response(await res.json())
    }
}


/*

-node-fetch
+-lodash
+lambda-log
+dev @types/lambda-log

*/