var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function rect() {

  let input = document.querySelector("input");
  let x = 10;
  let y = 100;
  let w = window.innerWidth / 9;
  let h = window.innerHeight / 9;
  for (let a = 0; a < input.value; a++) {
    new Rectangle(x, y, w, h);
    x += w + 20;
    if (x > (w + 20) * 8) {
      x = 10;
      y += h + h/2 +10;
    }
  }
}

class Rectangle {
  constructor(xcord, ycord, width, height) {
    this.x = xcord;
    this.y = ycord;
    this.w = width;
    this.h = height;
    this.c = canvas.getContext("2d");
    this.c.fillStyle = "orange";
    this.c.lineWidth = 4;
    
    this.c.fillRect(this.x, this.y, this.w, this.h);
    this.c.fillStyle = "black";
    this.c.stroke(); 
    
    this.c.font = "bold 9pt Verdana";
    this.c.textAlign = "center";
    this.text = `[${this.x.toFixed(2)}, ${this.y.toFixed(2)}]`;
    this.c.fillText(this.text, this.x + this.w / 2, this.y + this.h / 2);
    this.c.fillStyle = "rgba(255,0,255,.8)";
    this.c.fillRect(
      this.x + this.w / 2 - this.h / 4,
      this.y - this.h / 4,
      this.w / 4,
      this.h / 4
    );

    this.c.fillRect(
      this.x + this.w / 2 - this.h / 4,
      this.y + this.h,
      this.w / 4,
      this.h / 4
    );
    
  }
}
