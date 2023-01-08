import {
  useCallback, useEffect, useRef, useState,
} from 'react';

/**
 * This hook is used to suppress the "Can't perform a React state update on
 * an unmounted component".
 * @param {*} initialState The initial state
 * @returns {Array} Array containing the state and the setState function,
 * similar to React's useState
 */
export default function useSafeAsyncSetState(initialState) {
  const [state, setState] = useState(initialState);

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const setSafeAsyncState = useCallback((data) => {
    if (isMounted.current) {
      setState(data);
    }
  }, []);

  return [state, setSafeAsyncState];
}
