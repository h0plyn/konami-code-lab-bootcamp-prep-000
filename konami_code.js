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
    let key = event.key
    
    console.log(key)
    
    if (key === codes[index]) {
      index++;
      
      console.log(index)
      if (index === codes.length) {
        alert('GODMODE UNLOCKED!')
      };
    } else {
      
      index = 0;
    }
  })
  
}

init();