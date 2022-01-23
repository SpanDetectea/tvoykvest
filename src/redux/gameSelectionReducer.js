let initialState = {
};

const gameSelectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.UserId) {
                        return { ...item, followed: true };
                    }
                    return item;
                })
            };
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.UserId) {
                        return { ...item, followed: false };
                    }
                    return item;
                })
            };
        case SET_USERS:
            return { ...state, users: [...action.users] };
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.TotalUsersCount };
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage };
        case IS_PRELOADER:
            return { ...state, isPreloader: action.isPreloaderValue };
        case IS_DISABLED:
            return {
                ...state,
                isDisabled: action.isDisabledValue ? [...state.isDisabled, action.userId]
                    : state.isDisabled.filter(id => id !== action.userId)
            }
       
        default: return state;
    }
}
export default gameSelectionReducer;