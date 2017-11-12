class BoardMember {
  constructor(name,homeState,training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training

  }
  veto(){
    return "No, i must disagree";
  }
  approve(){
    return "You can do that!"

  }
  doCharity(){
    return "I like to help people."
  }
  releasePressStatement(){
    return "You will see great things from Scuber"
  }
  sayHi(){
    return `Hi, my name is ${this.name}. I am from ${this.homestate}, and I was trained in ${this.training}.`
  }
}
class Ceo extends BoardMember {
  constructor() {
    super(name,homeState,training)
  }
  hireEmployee(){
    return 'Welcome aboard';
  }
}
