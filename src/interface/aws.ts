export interface AWSLambdaEvent {
    resource: string;
    path: string;
    httpMethod: string;
    headers: {
        [key: string]: string;
    };
    multiValueHeaders:{
        [key: string]: string[];        
    };
    queryStringParameters: {
        [key: string]: string;
    };
    multiValueQueryStringParameters:{
        [key: string]: string[];        
    };
    pathParameters: {
        [key: string]: string;
    };
    stageVariables: {
        [key: string]: string;
    };
    requestContext:{
        resourceId: string;
        resourcePath: string;
        httpMethod: string;
        extendedRequestId: string;
        requestTime: string;
        path: string;
        accountId: string;
        protocol: string;
        stage: string;
        domainPrefix: string;
        requestTimeEpoch: number;
        requestId: string;
        identity:{
            cognitoIdentityPoolId:string;
            cognitoIdentityId: string;
            apiKey: string;
            principalOrgId: string;
            cognitoAuthenticationType: string;
            userArn: string;
            apiKeyId: string;
            userAgent: string;
            accountId: string;
            caller: string;
            sourceIp: string;
            accessKey: string;
            cognitoAuthenticationProvider: string;
            user: string;
        },
        domainName: string;
        apiId: string;
    };
    body: any;
    isBase64Encoded: boolean;



}