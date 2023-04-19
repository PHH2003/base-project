export interface IProduct {
    id: string;
    name: string;
    thuonghieu: string;
    description: string;
    price: number;
    xuatxu: string;
  }
  export interface IAdd {
    name: string;
    thuonghieu: string;
    description: string;
    price: number;
    xuatxu: string;
  }
  export interface IUpdate {
    name: string;
    thuonghieu: string;
    description: string;
    price: number;
    xuatxu: string;
  }
  export interface ISignup {
    name: string;
    emai: string;
    password: string;
    confirmPassword: string;
    role: "member";
  }
  export interface ISignin {
    emai: string;
    password: string;
  }
  