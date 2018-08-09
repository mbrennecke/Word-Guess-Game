//array of words for guessing
var wordList = ["able", "about", "account", "acid", "across", "act", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "air", "all", "almost", "among", "amount", "amusement", "and", "angle", "angry", "animal", "answer", "ant", "any", "apparatus", "apple", "approval", "arch", "argument", "arm", "army", "art", "as", "at", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "bad", "bag", "balance", "ball", "band", "base", "basin", "basket", "bath", "be", "beautiful", "because", "bed", "bee", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bit", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "box", "boy", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "but", "butter", "button", "by", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cat", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "cow", "crack", "credit", "crime", "cruel", "crush", "cry", "cup", "cup", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "day", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "do", "dog", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dry", "dust", "ear", "early", "earth", "east", "edge", "education", "effect", "egg", "elastic", "electric", "end", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "eye", "face", "fact", "fall", "false", "family", "far", "farm", "fat", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fly", "fold", "food", "foolish", "foot", "for", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "get", "girl", "give", "glass", "glove", "go", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "gun", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hat", "hate", "have", "he", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "how", "humour", "I", "ice", "idea", "if", "ill", "important", "impulse", "in", "increase", "industry", "ink", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "key", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "law", "lead", "leaf", "learning", "leather", "left", "leg", "let", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "lip", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "low", "machine", "make", "male", "man", "manager", "map", "mark", "market", "married", "mass", "match", "material", "may", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "net", "new", "news", "night", "no", "noise", "normal", "north", "nose", "not", "note", "now", "number", "nut", "observation", "of", "off", "offer", "office", "oil", "old", "on", "only", "open", "operation", "opinion", "opposite", "or", "orange", "order", "organization", "ornament", "other", "out", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pen", "pencil", "person", "physical", "picture", "pig", "pin", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "pot", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "put", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rat", "rate", "ray", "reaction", "reading", "ready", "reason", "receipt", "record", "red", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "rod", "roll", "roof", "room", "root", "rough", "round", "rub", "rule", "run", "sad", "safe", "sail", "salt", "same", "sand", "say", "scale", "school", "science", "scissors", "screw", "sea", "seat", "second", "secret", "secretary", "see", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "servant", "sex", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "", "skirt", "sky", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "so", "soap", "society", "sock", "soft", "solid", "some", "", "son", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "sun", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "tax", "teaching", "tendency", "test", "than", "that", "the", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tin", "tired", "to", "toe", "together", "tomorrow", "tongue", "tooth", "top", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "TRUE", "turn", "twist", "umbrella", "under", "unit", "up", "use", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "war", "warm", "wash", "waste", "watch", "water", "wave", "wax", "way", "weather", "week", "weight", "well", "west", "wet", "wheel", "when", "where", "while", "whip", "whistle", "white", "who", "why", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yes", "yesterday", "you", "young"];
var wins = 0;
var guessed = "";
var guesses = 8;
var word = "";
var lettersGuessed = "";
var remaining = "";
var wordSlice = "";
var remainingArr = [];
var notWin = true;

//Grabs the word that will be used for the game, initialized by the HTML

function wordCreate() {
	word = wordList[Math.floor(Math.random() * wordList.length)];
	remainingInitialize();
}

//Updates the DOM to show the word in progress

function remainingShow() {
	document.getElementById("currentWord").innerHTML = remaining;
}

//Creates the visual look of remaining, ie _ _ _ _ _

function remainingInitialize() {
	remaining = "";
	for (i=0; i < word.length; i++){
		remaining = remaining + "_ ";
	}
	remainingArray();
	remainingShow();
}

//Creates an array of remaining to show correct letters properly

function remainingArray() {
	remainingArr = remaining.split(" ");
	remainingArr.pop();
}

//Shows the guessed letters

function guessesShow() {
	document.getElementById("guesses").innerHTML = guesses;
}

//Doesn't allow duplicate letter guesses to be counted against player or to be shown

function letterGuessedShow() {
	document.getElementById("letters").innerHTML = lettersGuessed;
}

//Updates remaining to show the letters that are correct, replacing the _

function remainingReplacer(i, guess) {
	var newWord = "";
	remainingArr[i] = guess;
	for (var j = 0; j<remainingArr.length; j++){
		newWord = newWord + remainingArr[j] + " ";		
	}
	remaining = newWord;
	remainingShow();
}

//Splits the selected word into an array to check guesses letters against

function remainingChecker() {
	var checkWord = "";
	var checkWordArr = [];
	//remaining is used to check against the word for win condition
	checkWordArr = remaining.split(" ");
	//remaining has a space at the end that needs removed
	checkWordArr.pop();
	//remaining array is made into a string, probably could have used a method for
	//this. But I didn't know that at the time
	for (var j = 0; j<remainingArr.length; j++){
		checkWord = checkWord + checkWordArr[j];		
	}
	if (checkWord == word) {
		gameWin();
		notWin = false;
	}
}

//Reset function for guesses area

function guessesReset() {
	
	lettersGuessed = "";
	//non-breaking space character to keep row spacing
	document.getElementById("letters").innerHTML = "&nbsp";
}

//Reset function for the game

function gameReset(winLose) {
	document.getElementById(winLose).style.display = "none";
	guesses = 8;
	guessesShow();
	guessesReset();
	wordCreate();
	notWin = true;
}

//Function that displays a lose message

function gameLose() {
	document.getElementById("lose").style.display = "block";
}

//Funciton that displays a win message

function gameWin() {
	document.getElementById("win").style.display = "block";
}

//Event listener for key presses

document.onkeyup = function(event) {
	//non-breaking space character to keep row spacing
	document.getElementById("lead").innerHTML = "&nbsp";
	if (notWin) {
		if (guesses > 0) {
			var userGuess = event.key.toLowerCase();
			if (lettersGuessed.includes(userGuess)) {
				letterGuessedShow();
			} else {
				lettersGuessed = lettersGuessed + userGuess;
				letterGuessedShow();
			}
//verifies if the letter exists in the word
			if (word.includes(userGuess)) {
				var wordArr = [];
//makes the word an array to send the letter in the corrrect position 
//create remaining				
				wordArr = word.split("");
				for (var i=0; i<word.length; i++) {
					if (wordArr[i] == userGuess) {
						remainingReplacer(i, userGuess);
					}
				}
//check for win condition
				remainingChecker();
//if letter is not in the word, guesses counter is decremented				
			} else {
				guesses--;
				guessesShow();
//Lose condition check
				if (guesses == 0) {
					gameLose();
				}
			}
		}
//Game reset with lose message
		else {
			gameReset("lose");
		}
//Game reset with win message	
	} else {
		gameReset("win");
	}
}