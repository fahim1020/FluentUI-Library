document.addEventListener("DOMContentLoaded", () => {
  // * load CSS dynamically
  const loadCSS = (href) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  };

  // *Load the utility CSS file
  loadCSS("../dist/fluentui.min.css");

  // *map for utility classes to CSS properties
  const styleMap = {
    "ta-": "text-align",
    "bgc-": "background-color",
    "bgp-": "background-position",
    "bgs-": "background-size",
    "bgr-": "background-repeat",
    "bga-": "background-attachment",
    "bgb-": "background-blend-mode",
    "border-c-": "border-color",
    "border-s-": "border-style",
    "border-w-": "border-width",
    "border-r-": "border-radius",
    "b-shadow-": "box-shadow",
    "tc-": "color",
    "d-": "display",
    "flex-d-": "flex-direction",
    "jc-": "justify-content",
    "ai-": "align-items",
    "ac-": "align-content",
    "flex-w-": "flex-wrap",
    "flex-g-": "flex-grow",
    "flex-s-": "flex-shrink",
    "order-": "order",
    "tf-": "font-family",
    "t-": "font-size",
    "fw-": "font-weight",
    "fs-": "font-style",
    "fv-": "font-variant",
    "fstr-": "font-stretch",
    "lh-": "line-height",
    "mt-": "margin-top",
    "mr-": "margin-right",
    "mb-": "margin-bottom",
    "ml-": "margin-left",
    "of-": "overflow",
    "pos-": "position",
    "w-": "width",
    "h-": "height",
    "v-": "visibility",
    "zi-": "z-index",
    "l-": "list-style-type",
    "lp-": "list-style-position",
    "ofw-": "overflow-wrap",
    "tof-": "text-overflow",
    "tb-": "table-layout",
    "wb-": "word-break",
    "js-": "justify-self",
    "col-": "columna",
    "col-g-": "column-gap",
    "col-count-": "column-count",
    "col-w-": "column-width",
    "grid-cols-": "grid-template-columns",
    "grid-rows-": "grid-template-rows",
    "grid-col-": "grid-column",
    "grid-area-": "grid-area",
    "ji-": "justify-items",
    "gap-": "gap",
    "r-gap-": "row-gap",
    "c-gap-": "column-gap",
    "f-": "filter",
    "rs-": "resize",
    "pe-": "pointer-events",
    "o-": "object-fit",
    "st-": "stroke",
    "st-w-": "stroke-width",
    "aspect-": "aspect-ratio",
    "scrollbar-w-": "scrollbar-width",
    "scrollbar-c-": "scrollbar-color",
    "touch-": "touch-action",
    "writing-": "writing-mode",
  };
  // *Function to apply dynamic styles
  const applyDynamicStyles = () => {
    // *Get all elements in the document
    const allElements = document.querySelectorAll("*");

    allElements.forEach((element) => {
      const classList = element.classList;

      classList.forEach((className) => {
        // *Check each prefix in the style map
        for (const [prefix, property] of Object.entries(styleMap)) {
          if (className.startsWith(prefix)) {
            // *Extract the value from the class name
            const value = className.replace(`${prefix}(`, "").replace(")", "");

            // *Apply the style to the element
            element.style[property] = value;
          }
        }
      });
    });
  };

  // *Apply styles after the CSS file is loaded
  const observer = new MutationObserver(() => {
    applyDynamicStyles();
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // *Initial call to apply styles
  applyDynamicStyles();
});
