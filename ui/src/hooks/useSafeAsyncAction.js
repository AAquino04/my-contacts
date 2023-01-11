import { useCallback } from 'react';
import useIsMounted from './useIsMounted';

/**
 * This hooks returns a function that executes the callback passed to it only
 * when the component is mounted. Preventing async code execution when after a
 * component is unmounted.
 */
export default function useSafeAsyncAction() {
  const isMounted = useIsMounted();

  const runSafeAsyncAction = useCallback((callback) => {
    if (isMounted()) {
      callback();
    }
  }, [isMounted]);

  return runSafeAsyncAction;
}
