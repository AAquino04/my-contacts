import { useEffect, useRef, useState } from 'react';

export default function useAnimatedUnmount(visible) {
  const [shouldRender, setShouldRender] = useState(visible);
  const animatedElementRef = useRef(null);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
    }

    function handleAnimationEnd() {
      setShouldRender(false);
    }

    // Necessary for the cleanup function to work properly as the reference to
    // animatedElementRef.current might have changed by the time the cleanup function is called
    const elementRef = animatedElementRef.current;

    if (!visible) {
      elementRef?.addEventListener('animationend', handleAnimationEnd);
    }

    return () => {
      elementRef?.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [visible]);

  return {
    shouldRender,
    animatedElementRef,
  };
}
