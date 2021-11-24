import { connect } from 'react-redux';
import * as Actions from '../action/list';
import App from '../../../App'

const mapStateToProps = ( {list} ) => ({
    plan: list.plan,    
    done: list.done    
  });

const mapDispatchToProps = (dispatch) => ({    
    addToList: (task) => dispatch(Actions.addToList(task)),
    deleteFromList: (listId) => dispatch(Actions.deleteFromList(listId)),
    editTask: (listId, text) => dispatch(Actions.editTask(listId, text)),    
    addToDone: (listId) => dispatch(Actions.addToDone(listId)),    
});
  
export default connect(mapStateToProps, mapDispatchToProps)(App);