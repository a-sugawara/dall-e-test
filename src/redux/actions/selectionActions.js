export const tutorial = {
    type:"tutorial"
}

export const setImage = (image) => {
    return{
        type:"setImage",
        image
    }
}

export const setLoading = (loading) => {
    return{
        type:"setLoading",
        loading
    }
}

export const setRes = (response) => {
    return{
        type: "setRes",
        response:  response
    }
}

export const typeAssign = (type) => {
    return{
        type
    }
}
