
import {atom} from 'recoil'


export const sessionAtom=atom({
    key:'sessionAtom',
    default:'login'
})


export const usernameAtom=atom({
    key:'usernameAtom',
    default:''
})
