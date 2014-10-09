var hasher = require ('../index');

describe('Hasher', function () {
  it('should hash a number/integer into md5', function () {
    expect(hasher('md5', 123456)).toBe('e10adc3949ba59abbe56e057f20f883e');
  });

  it('should hash a string into md5', function () {
    expect(hasher('md5', 'asd123')).toBe('bfd59291e825b5f2bbf1eb76569f8fe7');
  });
});
