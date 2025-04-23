// Array - Declaration
let arr = ["apple", "banana", "cherry"];
console.log(arr);
let details = {
    age: 20,
    address: "Pune",
}
let arr2 = ["akash", details, 27, true, null, undefined];
arr2.push("new");
arr2.pop();
arr2.unshift("new");
arr2.shift();
console.log(arr2);

// Slice
let arr3 = [1, 2, 3, 4, 5];
let arr4 = arr3.slice(0, 3);
console.log(arr4);

// Splice
let arr5 = [1, 2, 3, 4, 5];
arr5.splice(1, 2, "a", "b");
console.log(arr5);
arr5.splice(1, 2);
console.log(arr5);

// Join
let arr6 = [1, 2, 3, 4, 5];
let str = arr6.join("-");
console.log(str);

// Sort
let arr7 = [1, 2, 3, 4, 5];
arr7.sort();
console.log(arr7);

// Reverse
let arr8 = [1, 2, 3, 4, 5];
arr8.reverse();
console.log(arr8);  

// Concat   
let arr9 = [1, 2, 3];
let arr10 = [4, 5, 6];
let arr11 = arr9.concat(arr10);
console.log(arr11);

// IndexOf
let arr12 = [1, 2, 3, 4, 5];
let index = arr12.indexOf(3);
console.log(index);

// LastIndexOf
let arr13 = [1, 2, 3, 4, 5, 3];
let index2 = arr13.lastIndexOf(3);
console.log(index2);

// Find
let arr14 = [1, 2, 3, 4, 5];
let index3 = arr14.find((element) => {
    return element > 3;
});
console.log(index3);

// FindIndex
let arr15 = [1, 2, 3, 4, 5];
let index4 = arr15.findIndex((element) => {
    return element > 3;
});
console.log(index4);

// Filter
let arr16 = [1, 2, 3, 4, 5];
let index5 = arr16.filter((element) => {
    return element > 3;
});
console.log(index5);

// Map
let arr17 = [1, 2, 3, 4, 5];
let index6 = arr17.map((element) => {
    return element * 2;
});
console.log(index6);

// Reduce
let arr18 = [1, 2, 3, 4, 5];
let index7 = arr18.reduce((acc, element) => {
    return acc + element;
}, 0);
console.log(index7);

// Every
let arr19 = [1, 2, 3, 4, 5];
let index8 = arr19.every((element) => {
    return element > 0;
});
console.log(index8);

// Some
let arr20 = [1, 2, 3, 4, 5];
let index9 = arr20.some((element) => {
    return element > 0;
});
console.log(index9);

// Fill
let arr21 = [1, 2, 3, 4, 5];
arr21.fill(0, 2, 4);
console.log(arr21);

// CopyWithin
let arr22 = [1, 2, 3, 4, 5];
arr22.copyWithin(0, 2, 4);
console.log(arr22);

// Includes
let arr23 = [1, 2, 3, 4, 5];
let index10 = arr23.includes(3);
console.log(index10);

// Flat
let arr24 = [1, 2, 3, [4, 5, 6]];
let index11 = arr24.flat();
console.log(index11);

// FlatMap
let arr25 = [1, 2, 3, [4, 5, 6]];
let index12 = arr25.flatMap((element) => {
    return element * 2;
});
console.log(index12);

// Keys
let arr26 = [1, 2, 3, 4, 5];
let index13 = arr26.keys();
console.log(index13);

// Entries
let arr27 = [1, 2, 3, 4, 5];
let index14 = arr27.entries();
console.log(index14);

// Values
let arr28 = [1, 2, 3, 4, 5];
let index15 = arr28.values();
console.log(index15);

// From
let arr29 = Array.from("akash");    
console.log(arr29);

// Of
let arr30 = Array.of(1, 2, 3, 4, 5);
console.log(arr30);

// IsArray
let arr31 = [1, 2, 3, 4, 5];
let index16 = Array.isArray(arr31);
console.log(index16);

// IsArrayBuffer
let arr32 = new ArrayBuffer(4);
let index17 = Array.isArrayBuffer(arr32);
console.log(index17);

// IsArrayBufferView
let arr33 = new Uint8Array(4);
let index18 = Array.isArrayBufferView(arr33);
console.log(index18);

// IsTypedArray
let arr34 = new Uint8Array(4);
let index19 = Array.isTypedArray(arr34);
console.log(index19);

// IsArrayLike
let arr35 = [1, 2, 3, 4, 5];
let index20 = Array.isArrayLike(arr35);
console.log(index20);

// IsArrayLikeObject
let arr36 = [1, 2, 3, 4, 5];
let index21 = Array.isArrayLikeObject(arr36);
console.log(index21);

// Iterator
let arr37 = [1, 2, 3, 4, 5];
let index22 = arr37[Symbol.iterator]();
console.log(index22.next());

// Generator
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const generator = generateNumbers();
  
  console.log(generator.next().value); // Output: 1
  console.log(generator.next().value); // Output: 2
  console.log(generator.next().value); // Output: 3

  // AsyncIterator
  async function* generateAsyncNumbers() {
    yield 1;
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield 2;
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield 3;
  }
  
  const asyncGenerator = generateAsyncNumbers();
  
  asyncGenerator.next().then(result => console.log(result.value)); // Output: 1
  asyncGenerator.next().then(result => console.log(result.value)); // Output: 2
  asyncGenerator.next().then(result => console.log(result.value)); // Output: 3

  // AsyncIterable
  async function* generateAsyncIterable() {
    yield 1;
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield 2;
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield 3;
  }
  
  const asyncIterable = generateAsyncIterable();
  
  for await (const value of asyncIterable) {
    console.log(value); // Output: 1, 2, 3
  }

  // Symbol
  let arr38 = [1, 2, 3, 4, 5];
  let index23 = arr38[Symbol.iterator]();
  console.log(index23.next());

  // TypedArray
  let arr39 = new Uint8Array(4);
  let index24 = arr39[Symbol.iterator]();
  console.log(index24.next());

  // ArrayBuffer
  let arr40 = new ArrayBuffer(4);
  let index25 = arr40[Symbol.iterator]();
  console.log(index25.next());

  // DataView
  let arr41 = new DataView(new ArrayBuffer(4));
  let index26 = arr41[Symbol.iterator]();
  console.log(index26.next());

  // SharedArrayBuffer
  let arr42 = new SharedArrayBuffer(4);
  let index27 = arr42[Symbol.iterator]();
  console.log(index27.next());

  // Atomics
  let arr43 = new Int32Array(new SharedArrayBuffer(4));
  let index28 = arr43[Symbol.iterator]();
  console.log(index28.next());

  // BigInt64Array
  let arr44 = new BigInt64Array(4);
  let index29 = arr44[Symbol.iterator]();
  console.log(index29.next());
