const BooksService = require('./books.service');
const MongoLib = require('../lib/mongo.lib');

jest.mock('../lib/mongo.lib');

const fakeBooks = [
  {
    id: 1,
    name: 'The Lord of the Rings',
  },
];

const spyGeatAll = jest.fn();

const MongoLibStub = {
  getAll: spyGeatAll,
  create: () => {},
};

describe('Test for BookService', () => {
  let service;

  beforeEach(() => {
    MongoLib.mockClear();
    MongoLib.prototype.getAll = jest.fn().mockResolvedValue(fakeBooks);
    service = new BooksService();
  });

  describe('test for getBooks', () => {
    test('should return an array of books', async () => {
      spyGeatAll.mockResolvedValue(fakeBooks);
      const books = await service.getBooks();
      expect(Array.isArray(books)).toBe(true);
      expect(books).toEqual(fakeBooks);
      expect(spyGeatAll).toHaveBeenCalled();
      expect(spyGeatAll).toHaveBeenCalledWith('books',{});
    });
  });
});
