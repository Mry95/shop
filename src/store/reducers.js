//reducer功能 修改 state   
//type字段： GET_DATA  用来 获取数据
export function data(state = [], action) {
    switch (action.type) {
        case "GET_DATA":
            {
                return action.data
            }
        case "CHANGE_DATA":
            {
                return action.data
            }
        default:
            {
                return state
            }
    }
}