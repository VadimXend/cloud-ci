import { calc } from "../calc"

test('calc', ()=>{
    const x = 4
    const y = 5

    const result = calc(x, y)
    expect(result).toBe(20)
})