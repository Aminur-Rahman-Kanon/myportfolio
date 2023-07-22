import { useState, useMemo, useEffect } from "react";

const useOnScreen = (ref) => {
    //state to set cuurent status of the target element intersection
    const [isIntersecting, setIntersecting] = useState(false);
    //creating the intersection observer object
    const observer = useMemo(() => new IntersectionObserver(([entry]) => setIntersecting(entry.isIntersecting), {
        threshold: 0.35
    }), [ref]);
    //calling observe method to observe the intersection of the element
    useEffect(() => {
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    if (window.screen.width >= 1080) return;
    
    return isIntersecting;
}

export default useOnScreen;
