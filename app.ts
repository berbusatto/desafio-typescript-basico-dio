import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SuperAccount } from './class/SuperAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const superAccount: SuperAccount = new SuperAccount('Bernardo', 30)

peopleAccount.deposit(150)
peopleAccount.changeStatus()

peopleAccount.changeStatus()
peopleAccount.withdraw(10)
peopleAccount.getBalance()
console.log(`Id da conta: ${peopleAccount.getDocId()}`);
peopleAccount.getStatus()
console.log('---------------')
companyAccount.getLoan(25)
companyAccount.getBalance()
companyAccount.setBalance(999999)
companyAccount.withdraw(999998)
companyAccount.getBalance()
console.log('---------------')
superAccount.superDeposit(100)
