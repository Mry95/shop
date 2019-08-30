export function getData(data) {
    return {
        type: "GET_DATA",
        data,
    }
}
export function changeData(data) {
    return {
        type: "CHANGE_DATA",
        data,
    }
}