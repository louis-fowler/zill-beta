import React from "react";

function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <button className="scrollToTop" onClick={() => scrollToTop()}>
        to top
      </button>
    </div>
  );
}

export default ScrollToTop;
