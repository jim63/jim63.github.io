export const selectSong = list => {
  return { type: "LIST_SELECTED", payload: list };
};

export const addList = listValue => {
  return { type: "LIST_ADD", payload: listValue };
};

export const delList = id => {
  return { type: "LIST_DEL", payload: id };
};

export const pendingList = id => {
  return { type: "LIST_PENDING", payload: id };
};
