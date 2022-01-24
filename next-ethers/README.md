# Ethers Next dApp Starter

__work in progress ...__

## Stack 

 - nextjs
 - ethers
 - zustand
 - useDapp
 - wagmi
 - apollo client
 - the graph
 - emotion css
 - react hook form
 - react i18next
 - yup validations

 Suggested

 - framer motion for animations

### Why Ethers? 

https://www.youtube.com/watch?v=r1ldSzcqaHo
### wagmi vs usedapp

both have quite useful hooks, but also quite overlap
both have autorefresh on block and wallet state changes

usedapp

- has more connector out of the box ( web3-react under the hood )
- It has very useful Models / Classes. eg Currency, CurrencyValue, ContractCall

wagmi hooks
- better typescript support
- ens support

I still need to review how the memoization to avoid unnecessary re-renders, but this is an optimization I don't see as critical at the moment. however I am tempted to take what is useful from each one and put it into something in zustand at some point, the problem there is maintenance, as it is another different framework, it would not have updates unless a community is formed around something like that.

In general ethers offer pretty much everything you need, if you are working on global update just use ethers on method on Zustand.

We'll leverage both useDapp and wagmi on the UI components with updating global state is not required. 

