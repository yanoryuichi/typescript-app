type TA = {
  name: string;
  getLength: () => number;
};

const A = (val: string): TA => {
  const name = val;
  const getLength = () => {
    return name.length;
  };
  return {
    name,
    getLength,
  };
};

class B {
  name: string = "";
  constructor(val: string) {
    this.name = val;
  }
  getLength() {
    return this.name.length;
  }
}

const _a = A("AAA");
console.log(_a.getLength());

const _b = new B("BBB");
console.log(_b.getLength());

const _a2: TA & { x: number } = { ..._a, x: 1 };
console.log(_a2.getLength(), _a2.x);
