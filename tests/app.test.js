import { nameIsValid,fullTrim,getTotal } from '../src/app'

describe('nameIsValid function', () => {
  it('валидное имя', () => {
    const result = nameIsValid('alex');
    expect(result).toBe(true);
  })

  it('Невалидное имя с болшой буквы', () => {
    const result = nameIsValid('Аlex');
    expect(result).toBe(false);
  })

  it('Невалидное имя с русскими буквами', () => {
    const result = nameIsValid('Алекс');
    expect(result).toBe(false);
  })

});


describe('fullTrim function', () => {
  it('Удаление пробелов в начале', () => {
    const result = fullTrim(' alex');
    expect(result).toBe('alex');
  })
});

it('Удаление пробелов в середине', () => {
  const result = fullTrim('al ex');
  expect(result).toBe('alex');
})

it('Удаление пробелов после каждой буквы', () => {
  const result = fullTrim('a l e x ');
  expect(result).toBe('alex');
});


describe('getTotal function', () => {
  const testCases = [{
    name: 'Один товар со скидкой 10%',
    products:  [{ price: 10, quantity: 10 }],
    discount: 10,
    total: 90,
  }, {
    name: 'Один товар без скидки',
    products:  [{ price: 10, quantity: 10 }],
    discount: 0,
    total: 100,
  }, {
    name: 'Два товара без скидки',
    products:  [{ price: 10, quantity: 10 },{ price: 50, quantity: 70 }],
    discount: 0,
    total: 3600,
  }];

  it.each(testCases)('%s', ({ products, discount, total }) => {
    const result = getTotal(products, discount);
    expect(result).toBe(total);
  })
});





