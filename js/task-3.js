function getElementWidth(content, padding, border) {
    const borderBox = border * 4;
    return   content + padding + borderBox;
    
}
console.log(getElementWidth("50px", "8px", "4px")); // 74