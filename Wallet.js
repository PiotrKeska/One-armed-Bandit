
class Wallet {
    constructor(money) {
         let _money = money;

        // getting current wallet's value
         this.getWalletValue = () => _money;

        // checking conditions you can play withh current wallet
         this.checkCanPlay = value => {
            if(_money >= value) return true;
            return false;
         }

        //  Function controling all activites with wallet
         this.changeWallet = (value, type = "+") => {
            if(typeof value === 'number' && !isNaN(value)){
                if(type === '+'){
                    return _money += value;
                } else if(type === '-'){
                    return _money -= value;
                } else {
                    throw new Error('Wrong type');
                }
            
            } else {
                throw new Error('Wrong value')
            }

         }
    }
}