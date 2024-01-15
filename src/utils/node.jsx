import {findNodeHandle} from 'react-native';

export const findNode = (ref, enabled = true) => {
  if (!enabled) {
    return undefined;
  }

  if (!ref || !ref.current) {
    return undefined;
  }

  return findNodeHandle(ref.current) || undefined;
};
