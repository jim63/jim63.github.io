import { combineReducers } from "redux";

//! status 1:active; 2:done; 3:delete
let allToDoList = [
  { text: "html", id: 1, status: 1 },
  { text: "css", id: 2, status: 1 },
  { text: "javascript", id: 3, status: 1 }
];

let localList = JSON.parse(window.localStorage.todos);
let id = localList.length + 1;

const getList = (list = localList, action = "") => {
  if (action.type === "LIST_ADD") {
    list = [...list, { text: action.payload, id: id, status: 1 }];
    id++;
  }
  if (action.type === "LIST_DEL") {
    list.forEach(lis => {
      if (lis.id == action.payload) {
        lis.status = 3;
      }
    });

    let list2 = JSON.stringify(list);
    let list3 = JSON.parse(list2);

    return list3;

    // return list.filter(li => {
    //   return li.status != 3;
    // });
  }

  if (action.type === "LIST_PENDING") {
    list.forEach(lis => {
      if (lis.id == action.payload) {
        if (lis.status == 2) {
          lis.status = 1;
        } else {
          lis.status = 2;
        }
      }
    });
    let list2 = JSON.stringify(list);
    let list3 = JSON.parse(list2);

    return list3;
    // return list.filter(li => {
    //   return li.status != 3;
    // });
  }
  return list;
};

export default combineReducers({
  lists: getList
  // addList: addListReducer
});
