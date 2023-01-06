const pushOrPop = (stack,screen) => {
    if(stack[stack.length - 1] === screen) {
        return [...stack]
    }

    const newStack = stack[stack.length - 2]?
            stack[stack.length - 2] === screen?
                stack.slice(0, stack.length - 1) :
                [...stack, screen]:
            [...stack, screen]
    return newStack
}
export default pushOrPop
