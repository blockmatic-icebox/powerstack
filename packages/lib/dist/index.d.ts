import * as React from 'react';

/**
 * Return a slugified copy of a string.
 *
 * @param {string} str The string to be slugified
 * @return {string} The slugified string.
 */
declare function toSlug(str: string): string;

/**
 * On the server, React emits a warning when calling `useLayoutEffect`.
 * This is because neither `useLayoutEffect` nor `useEffect` run on the server.
 * We use this safe version which suppresses the warning by replacing it with a noop on the server.
 *
 * See: https://reactjs.org/docs/hooks-reference.html#uselayouteffect
 */
declare const useIsomorphicLayoutEffect: typeof React.useLayoutEffect;

declare function usePrevious<T>(value: T): T;

export { toSlug, useIsomorphicLayoutEffect, usePrevious };
