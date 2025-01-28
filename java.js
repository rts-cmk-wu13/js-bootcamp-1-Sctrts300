let quotes = [
    "I would like to make a film to tell children `it's good to be alive`.", 
    "The creation of a single world comes from a huge number of fragments and chaos.", 
    "Is someone different at age 18 or 60? I believe one stays the same.",
    "Life is a winking light in the darkness.",
    "Always believe in yourself. Do this and no matter where you are, you will have nothing to fear.",
    "I'm not going to make movies that tell children, ´You should despair and run away´",
    "Do everything by hand, even when using the computer.",
    "The greatness of a mind is determined by the depth of its suffering.",
    "We live in an age when it is cheaper to buy the rights to movies than to make them.",
    "Cut off a wolf's head and it still has the power to bite.",
    "We depict hatred, but it is to depict that there are more important things. We depict a curse, to depict the joy of liberation."
    ];
    
    function newQuote() {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('quoteland').innerHTML = quotes[randomNumber];
      }