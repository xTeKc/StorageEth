const DataStorage = artifacts.require('DataStorage');

contract('DataStorage', () => {
  let dataStorage = null;
  before(async () => {
    dataStorage = await DataStorage.deployed();
  });

  it('Should add an id', async () => {
    await dataStorage.add(10);
    const id = await dataStorage.ids(0);
    assert(id.toNumber() === 10);
  });

  it('Should get an id', async () => {
    await dataStorage.add(20);
    const id = await dataStorage.get(1);
    assert(id.toNumber() === 20);
  });

  it('Should get all ids', async () => {
    const rawIds = await dataStorage.getAll();
    const ids = rawIds.map(id => id.toNumber());
    assert.deepEqual(ids, [10, 20]);
  });

  it('Should return the length of ids array', async () => {
    const length = await dataStorage.length();
    assert(length.toNumber() === 2); 
  });
});
