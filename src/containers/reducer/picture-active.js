function picture_Active(state = {},action) {
    switch (action.type){
        case 'PICTURE_SELECTED':
            return  action.payload;
            break;
        default:
            return state
    }
}

export default picture_Active;