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
import * as React from "react";
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? React.useLayoutEffect : () => {
};

// src/usePrevious.tsx
import * as React2 from "react";
function usePrevious(value) {
  const ref = React2.useRef(value);
  React2.useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
export {
  toSlug,
  useIsomorphicLayoutEffect,
  usePrevious
};
