function flattenArray<T> (arr: Array<T>) {
    const flattenedArray: Array<T> = [];
    
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