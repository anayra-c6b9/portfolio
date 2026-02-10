---
to: src/pages/<%= name %>/<%= name %>.tsx
---

import type { FC } from "react";
// import styles from "./<%= h.changeCase.camel(name) %>.module.css";

interface <%= name %>Props {
  __noPropsAllowed?: never
}

const <%= name %>: FC<<%= name %>Props> = () => {
  return (
    <div>
      <%= name %> works 🚀
    </div>
  );
};

export default <%= name %>;
