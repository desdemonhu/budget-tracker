const uuid = require('uuid');

export const create = ({name, budget}) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    name,
    budget,
    key: uuid.v1(),
    stamp: new Date().toString(),
  },
})

export const update = ({key,update}) => ({
  type: 'CATEGORY_UPDATE',
  payload: {
    key,
    update,
  },
})

export const destroy = (id) => ({
  type: 'CATEGORY_DESTORY',
  payload: {key: id,},
})
