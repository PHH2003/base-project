import { IAdd, IUpdate } from "../models";
import { instance } from "./instance";

export const getAll = () => {
    const uri = "/products";
    return instance.get(uri)

}

export const getId = ( id: string) => {
    const uri = "/product/" + id;
    return instance.get(uri)
}

export const create = (body: IAdd) => {
    const uri = "/products/"
    return instance.post(uri, body)
}
export const update = (id: string, body: IUpdate) => {
    const uri = "/products/" + id;
    return instance.put(uri, body)
}

export const remove = (id: string) => {
    const uri = "/products/" +id
    return instance.delete(uri)
}