// src/toSlug.ts
function toSlug(str) {
  let s = str;
  if (!s) {
    return "";
  }
  s = s.toLowerCase().trim();
  s = s.replace(/ & /g, " and ");
  s = s.replace(/[ ]+/g, "-");
  s = s.replace(/[-]+/g, "-");
  s = s.replace(/[^a-z0-9-]+/g, "");
  return s;
}

// src/useIsomorphicLayoutEffect.tsx
import {
  useLayoutEffect
} from "react";
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : () => {
};

// src/usePrevious.tsx
import {
  useEffect,
  useRef
} from "react";
function usePrevious(value) {
  const ref = useRef(value);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
export {
  toSlug,
  useIsomorphicLayoutEffect,
  usePrevious
};
