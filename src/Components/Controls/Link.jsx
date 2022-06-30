import React from "react";
import PropTypes from "prop-types";

export default function Link({ className, href, children }) {
  const onClick = (event) => {
    console.log("click");

    event.preventDefault();
    window.history.pushState({}, "", href);

    // communicate to Routes that URL has changed
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a className={className} href={href} onClick={onClick}>
      {children}
    </a>
  );
}

Link.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.elementType,
};
