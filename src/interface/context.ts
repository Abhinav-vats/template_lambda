export interface Context {
    statusCode: number;
    isFound: boolean;
    response: (responseBody: any)=> void
}