export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }


  getName = (): string => {
    return this.name
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  getBalance = (): number => {
    return this.balance
  }

  changeStatus = (): void => {
    this.status = !this.status
    console.log('Status alterado com sucesso!')
  }

  getStatus = (): boolean => {
    return this.status
  }

  deposit = (value: number): void => {
    if(this.validateStatus()){
      this.setBalance(value + this.getBalance());
      console.log(`O valor de ${value} foi depositado.`);
      console.log(`Saldo atual: ${this.balance}`);     
    }
  }

  withdraw = (value: number): void => {
    if(this.validateStatus() && this.getBalance() >= value){
      this.setBalance((this.getBalance() - value));
      console.log(`O valor de ${value} foi sacado.`);
      console.log(`Saldo atual: ${this.balance}`);     
    }
    
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
