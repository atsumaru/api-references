import React from "react";
import { Link } from "react-static";
import convert from "htmr";

export const htmlToComponent = html => convert(html, {
  transform: {
    a: props => <Link {...props} to={props.href} {...(props.href.match(/^https?:\/\//) ? { rel: "noopener", target: "_blank"} : {})} />,
    h1: props => <h1 {...props} id={`${props.children}`.replace(/\s+/, '-')} />,
    h2: props => <h2 {...props} id={`${props.children}`.replace(/\s+/, '-')} />,
    h3: props => <h3 {...props} id={`${props.children}`.replace(/\s+/, '-')} />
  }
});
