export class Model {
  user;
  items;
  constructor() {
    this.user="Turkwm";
    this.items = [
      new todoItem('Sport', false),
      new todoItem('Dinner', false),
      new todoItem('Coding', false),
      new todoItem('Driving', true),
      new todoItem('Breakfast', false),
      new todoItem('Cinema', false)
    ];
  }
}

export class todoItem {
  description;
  action;
  constructor(description,action) {
    this.description = description;
    this.action = action;
  }
}
