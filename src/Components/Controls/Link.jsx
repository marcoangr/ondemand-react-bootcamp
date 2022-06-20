import React from "react";

const Link = ({ className, href, children }) => {
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
};

export default Link;
