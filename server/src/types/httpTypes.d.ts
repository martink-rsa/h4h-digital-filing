interface Json {
    success: boolean;
    data: any;
}

type Send<T = Response> = (body?: Json) => T;

export interface HTTPResponse extends Express.Response {
    json: Send<this>
}