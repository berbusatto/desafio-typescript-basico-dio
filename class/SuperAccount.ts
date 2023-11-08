import { DioAccount } from "./DioAccount";

export class SuperAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
    }

    superDeposit = (value:number) : void => { 
        if(this.getStatus()){
            this.setBalance(this.getBalance() + (value + 10));
            console.log(`O valor de ${value + 10} foi 'super-depositado'.`);
            console.log(`Saldo atual: ${this.getBalance()}`);  
        }       
    }
}


