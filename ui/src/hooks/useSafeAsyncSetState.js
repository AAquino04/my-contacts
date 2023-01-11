import { useCallback, useState } from 'react';
import useIsMounted from './useIsMounted';

/**
 * This hook is used to suppress the "Can't perform a React state update on
 * an unmounted component".
 * @param {*} initialState The initial state
 * @returns {Array} Array containing the state and the setState function,
 * similar to React's useState
 */
export default function useSafeAsyncSetState(initialState) {
  const [state, setState] = useState(initialState);

  const isMounted = useIsMounted();

  const setSafeAsyncState = useCallback((data) => {
    if (isMounted()) {
      setState(data);
    }
  }, [isMounted]);

  return [state, setSafeAsyncState];
}
