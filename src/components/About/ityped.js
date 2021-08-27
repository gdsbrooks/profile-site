const itypedParams =
{
  // @param {Array} strings An array with the strings that will be animated
  "strings": 
  [
    "a developer",
    "a web developer",
    "a full stack \n developer",
    "a full stack web developer",
    "...........",
    "a lot of things...",
    "a pharmacist",
    "left-handed",
    "a Virgo ",
    "an immigrant",
    " 🏳️‍🌈 Family ",
    "friendly",
    "passionate",
    "hard-working",
    "ready",
    "George. "
  ],

  // @param {Number} typeSpeed: Type speed in milliseconds
  "typeSpeed": 100,

  // @param {Number} backSpeed: Type back speed in milliseconds
  "backSpeed": 30,

  // @param {Number} startDelay: Time before typing starts
  "startDelay": 500,

  // @param {Number} backDelay: Time before backspacing
  "backDelay": 600,

  // @param {Boolean} loop: The animation loop
  "loop": false,

  //@param {Boolean} showCursor: Show the cursor element
  "showCursor": true,

  //@param {Bollean} placeholder: Write the string in the placeholder content
  "placeholder": false,

  //@param {Bollean} disableBackTyping: Disable back typing for the last string sentence 
  "disableBackTyping": true,

  //@property {String} cursorChar: character for cursor
  "cursorChar": "|",

  //@property {Function} onFinished The OPTIONAL callback called after the last string, if `loop` is false,
  //"onFinished": function () { },
};

export {itypedParams as default};