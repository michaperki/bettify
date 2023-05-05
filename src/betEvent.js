// bet.js

// class for bet object
export class BetEvent {
    constructor(betName, betDate, betDescription, betDuration, betParticipants, betStatus, betWinner) {
        this.betName = betName;
        // set the bet date to the current date if no date is provided
        if (betDate === "") {
            this.betDate = new Date();
        }
        else {
            this.betDate = betDate;
        }
        this.betDescription = betDescription;
        // bet duration is an integer representing number of minutes
        this.betDuration = betDuration;
        this.betParticipants = betParticipants;
        this.betStatus = betStatus;
        this.betWinner = betWinner;
        this.status = "open";
        this.closeTime = new Date();
        this.closeTime.setTime(this.betDate.getTime() + (this.betDuration * 60000));
    }

    printBet() {
        // print an f string with a few of the bet's properties
        console.log(`Bet Event: ${this.betName} `);
        console.log(`Options`)
        // log the close time
        console.log(`Close Time: ${this.closeTime}`);
        // log the time remaining
        console.log(`Time Remaining: ${this.getTimeRemaining()}`);
        // log the status
        console.log(`Status: ${this.status}`);
    }

    // method to get the time remaining until the bet closes
    getTimeRemaining() {
        // if the bet is closed, return 0
        if (this.status === "closed") {
            return 0;
        }

        // get the current time
        const currentTime = new Date();

        // get the time remaining in milliseconds
        const timeRemaining = this.closeTime - currentTime;
        // convert the time remaining to hours, minutes, and seconds
        const hours = Math.floor(timeRemaining / 3600000);

        const minutes = Math.floor((timeRemaining % 3600000) / 60000);

        const seconds = Math.floor(((timeRemaining % 3600000) % 60000) / 1000);

        // return the time remaining as a string
        return `${hours} hours, ${minutes} minutes, ${seconds} seconds`; 
    }

    // method to close the bet
    closeBet() {
        // set the status to closed
        this.status = "closed";
        // set the close time to the current time
        this.closeTime = new Date();
    }

    // method to determine if the bet is closed
    isClosed() {
        // if the status is closed, return true
        if (this.status === "closed") {
            return true;
        }
        // else return false
        else {
            return false;
        }
    }
}