class Item{
  constructor(stack, pos, s){
    this.stack = stack;
    this.position = pos;
    this.size = s;
    stacks[this.stack-1].push(this);
  }
  display(){
    if(this.size == 1){
      fill('#E40303');
    } else if(this.size == 2){
      fill('#FF8C00');
    } else if(this.size == 3){
      fill('#FFED00');
    } else if(this.size == 4){
      fill('#008026');
    } else if(this.size == 5){
      fill('#004CFF');
    } else if(this.size == 6){
      fill('#732982');
    } else if(this.size == 7){
      fill('#FFFFFF');
    }
    rect(width*(2*this.stack-1)/6, height-(this.position*30)-30, this.size*35, 20);
  }
  update(){
    if(stack2.includes(this)){
      this.stack = 2;
      this.position = stack2.indexOf(this);
    }
    if(stack1.includes(this)){
      this.stack = 1;
      this.position = stack1.indexOf(this);
    }
    if(stack3.includes(this)){
      this.stack = 3;
      this.position = stack3.indexOf(this);
    }
  }
}