const foo: unknown = 10;
const bar: any = foo;
const bar2: unknown = foo;

// 下面*開發時期*每一行都會跳警告
const bar3: number = foo; // unknown 只能指派給 unknown
const bar4: string = foo; // unknown 只能指派給 unknown
foo.x.prop; // unknown 不能直接操作屬性、方法、建構式
foo.y.prop;
foo.z.prop;
foo();
new foo();
upperCase(foo);
foo`hello world!`;

function upperCase(x: string) {
  return x.toUpperCase();
}

foo.toFixed(1); // error! 即使目前實際型別是數字，仍不能直接對 unknown 操作

if (typeof foo === 'number') {
  foo.toFixed(1); // ok. TypeScript 推斷是 number 型別
}

if (typeof foo === 'string') {
  foo.toUpperCase(); // ok. TypeScript 推斷是 string 型別
}

const foo2 = foo as string; // 強制轉型
foo2.toUpperCase(); // ok. 因為 foo2 現在被轉型成 string 型別
