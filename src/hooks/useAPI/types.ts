export type hooksProps = {
    url: string,
    method: 'get' | 'post' | 'put' | 'patch' | 'delete',
    [key: string]: any
}