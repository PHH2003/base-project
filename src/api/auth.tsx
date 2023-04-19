import { ISignin, ISignup } from "../models";
import { instance } from "./instance";

export const signup = (data: ISignup) => {
  const uri = "/signup";
  return instance.post(uri, data);
};
export const signin = (data: ISignin) => {
  const uri = "/signin";
  return instance.post(uri, data);
};
