const uuid = require('uuid');
let store = require('../../lib/store');

let findCategory = (categoryKey) => {
  if(!categoryKey){
    return document.getElementsByName('category-select')[0].firstChild.value;
  } else {
    return store.getState().category.filter(c => c.key === categoryKey)[0].key;
  }
};

export const create = ({name, price, category}) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    price,
    category: findCategory(category),
    key: uuid.v1(),
    stamp: new Date().toString(),
  },
});

export const update = ({key,update}) => ({
  type: 'EXPENSE_UPDATE',
  payload: {
    key,
    update,
  },
});

export const destroy = (key) => (
  {
    type: 'EXPENSE_DESTORY',
    payload: key,
  }
);
