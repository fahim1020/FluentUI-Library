export function applyDynamic() {
	//border
    document.querySelectorAll('[class*="border-"]').forEach(function(element) {
        let borderClass = Array.from(element.classList).find(cls => cls.startsWith("border-"))
        
        if (borderClass) {
            let borderWidth = parseInt(borderClass.split("-")[1], 10);
            if (!isNaN(borderWidth)) {
                element.style.border = `${borderWidth}px solid black`
            }
        }
    })
	//fontSize
    document.querySelectorAll('[class*="fsize-"]').forEach(function(element) {
        let fontSizeClass = Array.from(element.classList).find(cls => cls.startsWith("fsize-"))
        
        if (fontSizeClass) {
            let size = parseInt(fontSizeClass.split("-")[1], 10);
            if (!isNaN(size)) {
                element.style.fontSize = `${size}px`
            }
			else {
				element.style.fontSize = size
			}
        }
    })
	//color
    document.querySelectorAll('[class*="col-"]').forEach(function(element) {
        let colClass = Array.from(element.classList).find(cls => cls.startsWith("col-"))
		element.style.color = colClass.split("-")[1].trim()
    })
}
