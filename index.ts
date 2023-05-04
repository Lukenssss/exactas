//! Mathematic

const pi: number = 3.14
const e: number = 2.71

const add: Function = (a: number, b: number) => {
    return a + b
}

const substract: Function = (a: number, b: number) => {
    return a - b
}

const multiply: Function = (a: number, b: number) => {
    return a * b
}

const divide: Function = (a: number, b: number) => {
    return a / b
}

const random: Function = (a: number, b: number) => {
    if (a && b) {
        const num = Math.floor(Math.random() * b) + a
        return num
    } else {
        const num = Math.floor(Math.random() * 11)
        return num
    }
}

const root: Function = (a: number) => {
    return Math.sqrt(a)
}

const at: Function = (a: number, b: number) => {
    return Math.pow(a, b)
}

const absolute: Function = (a: number) => {
    return Math.abs(a)
}

const cos: Function = (a: number) => {
    return Math.cos(a)
}

const tan: Function = (a: number) => {
    return Math.tan(a)
}

const sin: Function = (a: number) => {
    return Math.sin(a)
}

const log: Function = (a: number) => {
    return Math.log(a)
}


//! Physics

const g = -9.8

export { add, substract, multiply, divide, random, pi, e, root, at, absolute, cos, tan, sin, log, g }