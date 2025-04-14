function fadeTo(element, toValue = 0, duration = 200) {
    const fromValue = parseFloat(element.style.opacity) || 1;
    const startTime = Date.now();
    const framerate = 1000 / 60; // 60fps
    
    let interval = setInterval(() => {
        const currentTime = Date.now();
        const timeDiff = (currentTime - startTime) / duration;
        const value = fromValue - (fromValue - toValue) * timeDiff;
        if (timeDiff >= 1) {
            clearInterval(interval);
            interval = 0;
        }
        element.style.opacity = value.toString();
    }, framerate)
}