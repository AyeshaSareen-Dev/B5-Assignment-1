function formatString(input: string, toUpper?: boolean): string {
    if(toUpper === false) {
        return input
    }

    return input.toUpperCase()
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    return items.filter(item => item.rating >= 4)
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const ans: T[] = []
    arrays.forEach(arr => ans.push(...arr))
    return ans
}

class Vehicle {
    private year: number
    private make: string

    constructor(make: string, year: number) {
        this.make = make;
        this.year = year
    }

    public getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`
    }
}

class Car extends Vehicle {
    private model: string
    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model
    }

    public getModel() {
        return `Model: ${this.model}`
    }
}

function processValue(value: string | number): number {
    if(typeof value === 'string') return value.length;
    return value
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if(products.length < 1) return null
    var index = 0;
    var price = 0;
    products.forEach((prod, idx) => {
        if(prod.price > price) {
            index = idx
            price = prod.price
        }
    })

    return products[index]
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
    switch(day) {
        case Day.Sunday:
            return "Weekend"
        default:
            return "Weekday"
    }
}

async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}
