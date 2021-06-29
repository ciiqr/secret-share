import MyClass from './myclass';

test('default title is mlem', () => {
    const model = new MyClass();
    expect(model.title).toBe('mlem');
});
