# What are some differences between interfaces and types in TypeScript?
## Answer:
Some key differences between interfaces and types are:
### 1. Syntax
#### Interface
Interfaces are declared just like Java interfaces or JS classes(albeit abstract).
```typescript
interface Person {
  name: string;
  age: number;
}
```
#### Type
Types declaration uses variable assignment syntax.
```typescript
type Person = {
  name: string;
  age: number;
}
```
### 2. Inheritance
#### Interface
Interfaces can be extended easily just like classes.
#### Type
Types cannot be extended. We can use intersection to achieve something like extention using types.
### 3. Flexibility:
#### Interface
Interfacecs are used to define simple object shapes. They are not as flexible as types
#### Type
Types are versatile and can be used to define complex object shapes because of it's flexibilities.

# What is the use of the keyof keyword in TypeScript? Provide an example.
## Answer:
The keyword ```typescript keyof``` is used to create a type that allows all possible types of an object.
Example:
```typescript
type User = {
  name: string,
  age: number,
  email: string,
};

type UserKeys = keyof User;
```
