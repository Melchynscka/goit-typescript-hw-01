// union type
let mixedType: string | number;
mixedType = 6;
console.log(mixedType)

// literal type
type EnableOrDisable = 'enable' | 'disable';
let value: EnableOrDisable;
value = "enable";
console.log(value)

export {};