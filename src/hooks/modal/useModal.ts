import React from "react";

export default function useModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  React.useEffect(() => {
    // scroll block & release
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "unset";
      };
    }
  }, [isOpen]);

  return {
    isOpen,
    handleOpen,
    handleClose,
  };
}
