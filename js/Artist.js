class Artist {
    constructor(name, currency) {
        this.name = name;
        this.currency = currency;
        this.cents = 0;
        this.profit = 0;
        this.songsList = [];
    }

    
    intro() {
        return `Hi, my name is ${this.name} and I am a musician!`;
    }
    currencyFormat(numInCents) {
        return `${(numInCents / 100).toFixed(2)}`
    }
    songPrice(cents) {
        this.cents = cents;
        return `${this.name}'s price per song is ${this.currencyFormat(this.cents)} ${this.currency}`;
    }

    addSong(songName) {
        this.songsList.push({
            title: songName,
            count: 0,
        });
        return `Prideta daina ${songName}`
    }
    playlist() {
        let list = '';
        for (let i = 0; i < this.songsList.length; i++) {
            const { title, count } = this.songsList[i];
            list += `${i + 1}. ${title} (${count})`;
            if (i !== this.songsList.length - 1) {
                list += '\r\n'
            }
        }
        return `${this.name}'s playlist:
====================
${list}`;
    }

    playSong(songIndex) {
        this.songsList[songIndex].count++;
        this.wallet += this.cents;
        return `Playing song: ${this.songsList[songIndex].title}`;
    }

    fortune() {
        return `Total lifetime wealth of ${this.name} is ${this.currencyFormat(this.profit)} ${this.currency} right now!`;
    }
}

module.exports = Artist;