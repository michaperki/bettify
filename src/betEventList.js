// betList.js

// class for betList object
export class BetEventList {
    constructor() {
        this.betList = [];
    }

    addBet(bet) {
        this.betList.push(bet);
    }

    printBetList() {
        this.betList.forEach((bet) => {
            bet.printBet();
        });
    }

    // when a bet event open time plus duration is less than the current time, close the bet
    // where should this method be called?
    // answer: this method should be called in the index.js file in the initialPageLoad function
    // this method should be called after the bet list is populated
    closeExpiredBets() {
        // get the current time
        const currentTime = new Date();
        // loop through the bet list
        this.betList.forEach((bet) => {
            // if the bet is open and the close time is less than the current time, close the bet
            if (bet.status === "open" && bet.closeTime < currentTime) {
                bet.closeBet();
                console.log("bet closed by closeExpiredBets method")
            }
        });
    }
}