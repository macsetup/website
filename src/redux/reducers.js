// Redux
import {combineReducers} from 'redux'

// Action types
import * as types from './actions/types';

// Helpers
import {objectFromArray} from '../utils';

/**
 * Data Reducers
 */
function data(state = {}, action) {
    let {categories = [], item} = action;
    categories = objectFromArray(categories);
    let count = 0;

    switch (action.type) {

        // load categories to store
        case types.LOAD_CATEGORIES:
            return {
                ...categories,
            };

        // toggle item's is_selected
        case types.TOGGLE_ITEM_SELECTION:
            count = item.is_selected ? -1 : 1;
            const selected_count = state[item.category].selected_count + count;
            return {
                ...state,
                [item.category]: {
                    ...state[item.category],
                    selected_count: selected_count,
                    children: {
                        ...state[item.category].children,
                        [item.id]: {
                            ...state[item.category].children[item.id],
                            is_selected: !item.is_selected,
                        }
                    }
                }
            };

        // any other action: return state
        default:
            return state;
    }
}

/**
 * Script Reducers
 */
function script(state = "", action) {
    let {script} = action;

    switch (action.type) {

        // load script to store
        case types.LOAD_SCRIPT:
            return script;

        // any other action: return state
        default:
            return state;
    }
}

export default combineReducers({data, script});
