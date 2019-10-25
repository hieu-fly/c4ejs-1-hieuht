let count = 0;
const numberCount = document.getElementById('numberCount');
const tang = document.getElementById('tang');
const giam = document.getElementById('giam');
var t;
const newQuote = document.getElementById('newQuote')
//1
tang.addEventListener('click', () => {
    count++;
    numberCount.innerHTML = count;
})
giam.addEventListener('click', () => {
    count--;
    numberCount.innerHTML = count;
})
//2
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const number = document.getElementById('number');
let result = document.getElementById('result');

start.addEventListener('click', () => {
    let numberValue = number.value;

    t = setInterval(() => {
        numberValue--;
        result.innerHTML = Number(numberValue);
        if (numberValue < 0) {
            clearInterval(t);
            result.innerHTML = "Time's up";
        }
    }, 1000);
});
stop.addEventListener('click', () => {
    clearInterval(t);
    result.innerHTML = 'STOP??';
});
//3
let quote = [
    {
        "quoteText": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "quoteAuthor": "Thomas Edison"
    },
    {
        "quoteText": "You can observe a lot just by watching.",
        "quoteAuthor": "Yogi Berra"
    },
    {
        "quoteText": "A house divided against itself cannot stand.",
        "quoteAuthor": "Abraham Lincoln"
    },
    {
        "quoteText": "Difficulties increase the nearer we get to the goal.",
        "quoteAuthor": "Johann Wolfgang von Goethe"
    },
    {
        "quoteText": "Fate is in your hands and no one elses",
        "quoteAuthor": "Byron Pulsifer"
    },
    {
        "quoteText": "Be the chief but never the lord.",
        "quoteAuthor": "Lao Tzu"
    },
    {
        "quoteText": "Nothing happens unless first we dream.",
        "quoteAuthor": "Carl Sandburg"
    },
    {
        "quoteText": "Well begun is half done.",
        "quoteAuthor": "Aristotle"
    },
    {
        "quoteText": "Life is a learning experience, only if you learn.",
        "quoteAuthor": "Yogi Berra"
    },
    {
        "quoteText": "Self-complacency is fatal to progress.",
        "quoteAuthor": "Margaret Sangster"
    },
    {
        "quoteText": "Peace comes from within. Do not seek it without.",
        "quoteAuthor": "Buddha"
    },
    {
        "quoteText": "What you give is what you get.",
        "quoteAuthor": "Byron Pulsifer"
    },
    {
        "quoteText": "We can only learn to love by loving.",
        "quoteAuthor": "Iris Murdoch"
    },
    {
        "quoteText": "Life is change. Growth is optional. Choose wisely.",
        "quoteAuthor": "Karen Clark"
    },
    {
        "quoteText": "You'll see it when you believe it.",
        "quoteAuthor": "Wayne Dyer"
    },
    {
        "quoteText": "Today is the tomorrow we worried about yesterday.",
        "quoteAuthor": ""
    },
    {
        "quoteText": "It's easier to see the mistakes on someone else's paper.",
        "quoteAuthor": ""
    },
    {
        "quoteText": "Every man dies. Not every man really lives.",
        "quoteAuthor": ""
    },
    {
        "quoteText": "To lead people walk behind them.",
        "quoteAuthor": "Lao Tzu"
    },
    {
        "quoteText": "Having nothing, nothing can he lose.",
        "quoteAuthor": "William Shakespeare"
    },
    {
        "quoteText": "Trouble is only opportunity in work clothes.",
        "quoteAuthor": "Henry J. Kaiser"
    },
    {
        "quoteText": "A rolling stone gathers no moss.",
        "quoteAuthor": "Publilius Syrus"
    },
    {
        "quoteText": "Ideas are the beginning points of all fortunes.",
        "quoteAuthor": "Napoleon Hill"
    },
    {
        "quoteText": "Everything in life is luck.",
        "quoteAuthor": "Donald Trump"
    },
    {
        "quoteText": "Doing nothing is better than being busy doing nothing.",
        "quoteAuthor": "Lao Tzu"
    },
    {
        "quoteText": "Trust yourself. You know more than you think you do.",
        "quoteAuthor": "Benjamin Spock"
    },
    {
        "quoteText": "Study the past, if you would divine the future.",
        "quoteAuthor": "Confucius"
    },
    {
        "quoteText": "The day is already blessed, find peace within it.",
        "quoteAuthor": ""
    },
    {
        "quoteText": "From error to error one discovers the entire truth.",
        "quoteAuthor": "Sigmund Freud"
    },
    {
        "quoteText": "Well done is better than well said.",
        "quoteAuthor": "Benjamin Franklin"
    },
    {
        "quoteText": "Bite off more than you can chew, then chew it.",
        "quoteAuthor": "Ella Williams"
    },
    {
        "quoteText": "Work out your own salvation. Do not depend on others.",
        "quoteAuthor": "Buddha"
    },
    {
        "quoteText": "One today is worth two tomorrows.",
        "quoteAuthor": "Benjamin Franklin"
    },
    {
        "quoteText": "Once you choose hope, anythings possible.",
        "quoteAuthor": "Christopher Reeve"
    },
    {
        "quoteText": "God always takes the simplest way.",
        "quoteAuthor": "Albert Einstein"
    },
    {
        "quoteText": "One fails forward toward success.",
        "quoteAuthor": "Charles Kettering"
    },
    {
        "quoteText": "From small beginnings come great things.",
        "quoteAuthor": ""
    },
    {
        "quoteText": "Learning is a treasure that will follow its owner everywhere",
        "quoteAuthor": "Chinese proverb"
    },
    {
        "quoteText": "Be as you wish to seem.",
        "quoteAuthor": "Socrates"
    },
    {
        "quoteText": "The world is always in movement.",
        "quoteAuthor": "V. Naipaul"
    },
    {
        "quoteText": "Never mistake activity for achievement.",
        "quoteAuthor": "John Wooden"
    },
    {
        "quoteText": "What worries you masters you.",
        "quoteAuthor": "Haddon Robinson"
    },
    {
        "quoteText": "One faces the future with ones past.",
        "quoteAuthor": "Pearl Buck"
    },
    {
        "quoteText": "Goals are the fuel in the furnace of achievement.",
        "quoteAuthor": "Brian Tracy"
    },
    {
        "quoteText": "Who sows virtue reaps honour.",
        "quoteAuthor": "Leonardo da Vinci"
    },
    {
        "quoteText": "Be kind whenever possible. It is always possible.",
        "quoteAuthor": "Dalai Lama"
    },
    {
        "quoteText": "Talk doesn't cook rice.",
        "quoteAuthor": "Chinese proverb"
    },
    {
        "quoteText": "He is able who thinks he is able.",
        "quoteAuthor": "Buddha"
    },
    {
        "quoteText": "Be as you wish to seem.",
        "quoteAuthor": "Socrates"
    },
    {
        "quoteText": "A goal without a plan is just a wish.",
        "quoteAuthor": "Larry Elder"
    },
    {
        "quoteText": "To succeed, we must first believe that we can.",
        "quoteAuthor": "Michael Korda"
    },
    {
        "quoteText": "Learn from yesterday, live for today, hope for tomorrow.",
        "quoteAuthor": "Albert Einstein"
    },
    {
        "quoteText": "A weed is no more than a flower in disguise.",
        "quoteAuthor": "James Lowell"
    },
    {
        "quoteText": "Do, or do not. There is no try.",
        "quoteAuthor": "Yoda"
    },
    {
        "quoteText": "All serious daring starts from within.",
        "quoteAuthor": "Harriet Beecher Stowe"
    },
    {
        "quoteText": "The best teacher is experience learned from failures.",
        "quoteAuthor": "Byron Pulsifer"
    },
    {
        "quoteText": "Think how hard physics would be if particles could think.",
        "quoteAuthor": "Murray Gell-Mann"
    },
    {
        "quoteText": "Love is the flower you've got to let grow.",
        "quoteAuthor": "John Lennon"
    },
    {
        "quoteText": "Don't wait. The time will never be just right.",
        "quoteAuthor": "Napoleon Hill"
    },
    {
        "quoteText": "One fails forward toward success.",
        "quoteAuthor": "Charles Kettering"
    },
    {
        "quoteText": "Time is the wisest counsellor of all.",
        "quoteAuthor": "Pericles"
    },
    {
        "quoteText": "You give before you get.",
        "quoteAuthor": "Napoleon Hill"
    },
    {
        "quoteText": "Wisdom begins in wonder.",
        "quoteAuthor": "Socrates"
    },
    {
        "quoteText": "Without courage, wisdom bears no fruit.",
        "quoteAuthor": "Baltasar Gracian"
    },
    {
        "quoteText": "Change in all things is sweet.",
        "quoteAuthor": "Aristotle"
    },
    {
        "quoteText": "What you fear is that which requires action to overcome.",
        "quoteAuthor": "Byron Pulsifer"
    }
];
newQuote.addEventListener('click', () => {
    let randomNumber = Math.floor(Math.random() * (quote.length));
    document.getElementById('quoteDisplay').innerHTML = quote[randomNumber].quoteText;
    document.getElementById('author').innerHTML = "-------------" + quote[randomNumber].quoteAuthor;
});
//4
//new 12
//12.1
const items = ['Backpack', 'MiBand watch', 'Ring'];
console.log(items);
//12.3
const testItem = document.getElementById('item_list_ul');
console.log(testItem);
let i = 2;
//12.4
function showList() {
    for (let i = 0; i < items.length; i++) {
        testItem.insertAdjacentHTML('beforeend', `<li id="${i}"><span>${items[i]}</span><button>remove</button> </li>`);
        const li = document.getElementById(`${i}`);
        li.onclick = function(){
            console.log('remove');
            console.log('Item:' + li.id);
            testItem.removeChild(li);
            console.log(testItem);
        }
    }
}
function resetInput() {
    itemInput.value = "";
}
//12.6
let itemInput = document.getElementById('item_input');
const add = document.getElementById('add_btn');
console.log(itemInput);
console.log(add);
//12.7
add.addEventListener('click', () => {
    i++;
    console.log('Add button is clicked');
    console.log(itemInput.value);//12.8
    items.push(itemInput.value);//12.9
    console.log(items);
    let itemValue = itemInput.value;
    testItem.insertAdjacentHTML('beforeend', `<li id="${i}"><span>${itemValue}</span><button>remove</button> </li>`);
    const li = document.getElementById(`${i}`);
        li.onclick = function(){
            console.log('remove');
            console.log('Item:' + li.id);            
            testItem.removeChild(li);
            items.splice(i,1);
            console.log(items);
            console.log(testItem);
        }
    resetInput();
})
showList();