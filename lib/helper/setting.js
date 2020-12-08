const setColor = (element)=>{
    let categoryColor = '#bdb2ff';
    if (element.id % 2 === 0) {
        categoryColor = '#06d6a0';
    }
    return categoryColor;
}
export default setColor;