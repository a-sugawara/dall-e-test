export const parcedResponse = (response) =>{
    const res = response.split('\n').filter((line) => line).map((line, i)=>{
            return line
    })
    return res
}
