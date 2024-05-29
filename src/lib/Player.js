class Player {
	constructor(playerTag, game, gunId) {
		this.hits = 0;
		this.playerTag = playerTag;
		this.dead = false;
		this.life = 100;
		this.gameID = game;
		this.gunId = gunId;
		this.isStreak = false;
		this.streak = 0;
		this.deathCount = 0;
		this.score = 0;
	}
	getScore() {
		return this.score;
	}
	getHits() {
		return this.hits;
	}
	isDead() {
		return this.dead;
	}
	getDeathCount() {
		return this.deathCount;
	}
	getPlayerTag() {
		return this.playerTag;
	}
	getIsStreak() {
		return this.isStreak;
	}
	getStreak() {
		return this.streak;
	}
	getScore() {
		return this.score;
	}
	processHit(shooterId, targetId) {
		if (targetId == this.gunId) {
			this.hits++;
			this.life = this.life - 10;
			this.isStreak = false;
			this.streak = 0;
			console.log(`player: ${this.playerTag} was shot \n Hp: ${this.life} `);
		}
		if (shooterId == this.gunId) {
			if (this.isStreak) {
				this.score = this.score + 150 * this.streak;
				console.log(`player ${this.playerTag} got a hit \n score:${this.score}`);
			} else {
				this.score = this.score + 100;
				console.log(`player ${this.playerTag} got a hit \n score:${this.score}`);
				this.isStreak = true;
				this.streak += 1;
			}
		}
	}
}

export { Player };
