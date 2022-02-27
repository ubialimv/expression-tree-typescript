function flattenArray (arr: Array<unknown>) {
    const flattenedArray = [];
    
    arr.forEach(x => {
        if (Array.isArray(x)) {
            flattenedArray.push(...flattenArray(x));
        } else {
            flattenedArray.push(x);
        }
    })

    return flattenedArray;
}

export default flattenArray