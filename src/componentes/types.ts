import { userInfo } from "os";

type User = {
    name: string
    email: string
    address: {
        city: string
        state?: string
    }

}

function showWelcomeMessage(user: User){
    return `Welcome ${user.name}, your e-mail is ${user.email}. Your city is ${user.address.city} and your state is ${user.address.state}`;
}
const message = showWelcomeMessage({
   name: 'Danielle',
   email: 'dany@eu.com.br',
   address: {
       city: 'Caucaia', 
       state: 'Ceará',
   }
})

