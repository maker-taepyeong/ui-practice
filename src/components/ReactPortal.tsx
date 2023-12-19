import React from "react";
import ReactDOM from "react-dom";

type ReactPortalProps = {
  children: React.ReactNode;
  wrapperId: string;
};

export default function ReactPortal({
  children,
  wrapperId = "portal-root",
}: ReactPortalProps) {
  const [wrapperElement, setWrapperElement] =
    React.useState<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body
    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    }
    setWrapperElement(element);
  }, [wrapperId]);

  React.useEffect(() => {
    return () => {
      cleanupWrapper(wrapperId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // wrapperElement state will be null on the very first render.
  if (wrapperElement === null) return null;

  return ReactDOM.createPortal(children, wrapperElement);
}

function createWrapperAndAppendToBody(wrapperId: string) {
  const wrapperElement = document.createElement("div");
  wrapperElement.setAttribute("id", wrapperId);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
}

function cleanupWrapper(wrapperId: string) {
  const wrapperElement = document.getElementById(wrapperId);
  if (wrapperElement) {
    document.body.removeChild(wrapperElement);
  }
}
