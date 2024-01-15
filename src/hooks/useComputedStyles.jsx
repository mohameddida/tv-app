import {useMemo} from 'react';

function useComputedStyles(createStyles, props) {
  return useMemo(() => {
    return createStyles(props || {});
  }, [props, createStyles]);
}

export default useComputedStyles;
