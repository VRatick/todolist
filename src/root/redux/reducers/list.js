import * as Constants from '../constants/list';

const initialState = {
    plan: ['Go to home', 'Go to gym'],
    done: ['Cooking dinner']
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Constants.ADD_TO_LIST: {
            const { task } = action;
            const plan = state.plan;
            plan.push(task);

            return {...state, plan};
        }
        case Constants.DELETE_FROM_LIST: {
            const { listId } = action;
            const plan = state.plan;
            plan.splice(listId, 1);            
            return { ...state, plan} 
        }
        case Constants.EDIT: {
            const { listId, text } = action;
            const plan = state.plan;
            plan[listId] = text;            
            return { ...state, plan}
        }
        
        case Constants.ADD_TO_DONE: {
            const { listId } = action;
            const plan = state.plan;
            const done = state.done;
            const removed = plan.splice(listId, 1).join('');
            done.push(removed)
            return { ...state, plan, done }
        }

        default: {
            return state;
        }
    }
}
