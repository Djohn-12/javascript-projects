function makeLine(size) {
    let line = "";
    for (let i = 0; i < size; i++) {
    
      line += "#";
    }
    return line;
  }
console.log(makeLine(5));

function makeSquare(size) {
let square = "";
    for (let i = 0; i < size; i++) {
      square += makeLine(size);
      if (i < size - 1) {
        square += "\n";
      }
    }
    return square;
  }
  
  console.log(makeSquare(5));

  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
  }
  console.log(makeDownwardStairs(5));

  
  function makeDiamond(height) {
    let diamond = makeIsoscelesTriangle(height);
  }
  let equals = "truck";
  function reverse(s){
    return s.split('').reverse().join('');
  }
  console.log(reverse(equals));
