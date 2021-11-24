import * as Constants from '../constants/list'

export const addToList = (task) => ({
    type: Constants.ADD_TO_LIST,
    task
});

export const deleteFromList = (listId) => ({
    type: Constants.DELETE_FROM_LIST,
    listId    
});

export const editTask = (listId, text) => ({
    type: Constants.EDIT,
    listId,
    text
});

export const addToDone = (listId) => ({
    type: Constants.ADD_TO_DONE,
    listId
});