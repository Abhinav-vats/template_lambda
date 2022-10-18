
import { SecretsManagerCache } from 'aws-secrets-manager-cache';
export const getSecret = {
    region : "ap-south-1",
    secretReader: async function(secretId: string, isJson: boolean):Promise<any>{
        const helper = new SecretsManagerCache()

        const secret =await helper.getSecret(secretId,isJson)

        return secret
    }
}