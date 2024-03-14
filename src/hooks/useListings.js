import { useState, useEffect, useRef } from 'react';

function useListings(initialText) {
    const [isOverflowing, setIsOverflowing] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const handleOverflowChange = () => {
            if (elementRef.current.scrollHeight != elementRef.current.clientHeight) {
                setIsOverflowing(true);
            } else {
                setIsOverflowing(false);
            }
        };

        handleOverflowChange(); // Check overflow initially

        return () => {
            // Cleanup function
        };
    }, [initialText]);

    return { elementRef, isOverflowing };
}

export default useListings;
