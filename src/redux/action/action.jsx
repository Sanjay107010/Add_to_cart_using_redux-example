export const Add = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};
export const Del = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

export const Remove = (item) => {
  return {
    type: "RMV_ONE",
    payload: item,
  };
};
