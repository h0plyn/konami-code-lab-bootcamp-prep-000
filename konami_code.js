const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function init() {
  document.body.addEventListener('keydown', (event) => {
    let key = event.key;
    
    if (key === codes[index]) {
      index++;
    
      if (index === codes.length) {
        alert('GODMODE UNLOCKED!')
      }
    } else {
      index = 0;
    };
  });
  
};

init();