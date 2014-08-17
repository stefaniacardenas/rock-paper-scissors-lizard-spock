function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
};

 Game.prototype.PAIRS = {
 	rock: 				{ scissors: 'crushes', lizard: 'squashes' },
	paper: 				{ rock: 'covers', spock: 'disproves' },
	scissors: 		{ paper: 'cuts', lizard: 'decapitates' },
	spock: 				{ scissors: 'smashes', rock: 'vaporizes' },
	lizard: 			{ spock: 'poisons', paper: 'eats' }
 }

Game.prototype.winner = function() {
	if(this._isSamePick()) return null;

	if(this._victoryVerbFor(this.player1.pick, this.player2.pick)) {
		return this.player1;
	}
	else {
		return this.player2;
	}
}

Game.prototype.loser = function() {
	return (this.winner()=== this.player1 ? this.player2 : this.player1);
}

Game.prototype.winningMessage = function() {
	var message;

	if(this.winner()) {
		message = [
		this.winner().name + " wins!",
		"SYD picked: " + this.player2.pick.toUpperCase() + ".\n",
		this.winner().pick.toUpperCase(),
		this._victoryVerbFor(this.winner().pick, this.loser().pick),
		this.loser().pick.toUpperCase() + ". "].join(' ');
	} else {
		message = 'Draw';
	}

	return message ;

}

Game.prototype._victoryVerbFor = function(pick, opponentPick) {
	return this.PAIRS[pick][opponentPick] ;
}

Game.prototype._isSamePick = function() {
 	return this.player1.pick === this.player2.pick;
};

Game.prototype.sample = function() {
  var array = Object.keys(this.PAIRS)
  return array[Math.floor ( Math.random() * array.length )];
}