import React from "react";
import ReactDOM from "react-dom";
import styles from "@/components/Modal.module.css";
import useModal from "@/hooks/modal/useModal";

type ModalProps = {
  onClose?: () => void;
};

function Modal({ onClose }: ModalProps) {
  const {
    isOpen: showVerificationModal,
    handleOpen: handleOpenVerification,
    handleClose: handleCloseVerification,
  } = useModal();
  const {
    isOpen: showAddAddressModal,
    handleOpen: handleOpenAddAddress,
    handleClose: handleCloseAddAddress,
  } = useModal();

  return (
    <ReactPortal wrapperId="portal-root">
      <div id="dialog_layer" className={styles.backdrop}>
        <div
          role="dialog"
          id="dialog1"
          aria-labelledby="dialog1_label"
          aria-modal="true"
          className={styles.dialog}
        >
          <h2 id="dialog1_label" className={styles.dialog_label}>
            Add Delivery Address
          </h2>
          <div className={styles.dialog_form}>
            <div className={styles.dialog_form_item}>
              <label>
                <span className={styles.label_text}>Street:</span>
                <input type="text" className={styles.wide_input} />
              </label>
            </div>
            <div className={styles.dialog_form_item}>
              <label>
                <span className={styles.label_text}>City:</span>
                <input type="text" className={styles.city_input} />
              </label>
            </div>
            <div className={styles.dialog_form_item}>
              <label>
                <span className={styles.label_text}>State:</span>
                <input type="text" className={styles.state_input} />
              </label>
            </div>
            <div className={styles.dialog_form_item}>
              <label>
                <span className={styles.label_text}>Zip:</span>
                <input type="text" className={styles.zip_input} />
              </label>
            </div>
            <div className={styles.dialog_form_item}>
              <label htmlFor="special_instructions">
                <span className={styles.label_text}>Special instructions:</span>
              </label>
              <input
                id="special_instructions"
                type="text"
                aria-describedby="special_instructions_desc"
                className={styles.wide_input}
              />
              <div className={styles.label_info} id="special_instructions_desc">
                For example, gate code or other information to help the driver
                find you
              </div>
            </div>
            <div className={styles.dialog_form_actions}>
              <button type="button" onClick={handleOpenVerification}>
                Verify Address
              </button>
              <button type="button" onClick={handleOpenAddAddress}>
                Add
              </button>
              <button type="button" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </div>
        {showVerificationModal && (
          <AddressVerificationModal onClose={handleCloseVerification} />
        )}
        {showAddAddressModal && (
          <AddAddressModal onClose={handleCloseAddAddress} />
        )}
      </div>
    </ReactPortal>
  );
}

export default Modal;

type ReactPortalProps = {
  children: React.ReactNode;
  wrapperId: string;
};

function ReactPortal({
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

function AddressVerificationModal({ onClose }: ModalProps) {
  const {
    isOpen: showEndOfDepthModal,
    handleOpen: handleOpenEndOfDepthModal,
    handleClose: handleCloseEndOfDepth,
  } = useModal();

  return (
    <ReactPortal wrapperId="portal-root-2">
      <div className={styles.backdrop}>
        <div
          id="dialog2"
          role="dialog"
          aria-labelledby="dialog2_label"
          aria-describedby="dialog2_desc"
          aria-modal="true"
          className={styles.dialog}
        >
          <h2 id="dialog2_label" className={styles.dialog_label}>
            Verification Result
          </h2>
          <div id="dialog2_desc" className={styles.dialog_desc}>
            <ul>
              <li>
                The first interactive element, the help link, is at the bottom
                of the dialog.
              </li>
              <li>
                If focus is placed on the first interactive element when the
                dialog opens, the validation message may not be visible.
              </li>
              <li>
                If the validation message is visible and the focus is on the
                help link, then the focus may not be visible.
              </li>
              <li>
                When the dialog opens, it is important that both:
                <ul>
                  <li>
                    The beginning of the text is visible so users do not have to
                    scroll back to start reading.
                  </li>
                  <li>The keyboard focus always remains visible.</li>
                </ul>
              </li>
            </ul>
            <p>There are several ways to resolve this issue:</p>
            <ul>
              <li>
                Place an interactive element at the top of the dialog, e.g., a
                button or link.
              </li>
              <li>
                Make a static element focusable, e.g., the dialog title or the
                first block of text.
              </li>
            </ul>
            <p>
              Please <em>DO NOT </em> make the element with role dialog
              focusable!
            </p>
            <ul>
              <li>
                The larger a focusable element is, the more difficult it is to
                visually identify the location of focus, especially for users
                with a narrow field of view.
              </li>
              <li>
                The dialog has a visual border, so creating a clear visual
                indicator of focus when the entire dialog has focus is not very
                feasible.
              </li>
            </ul>
            <p>
              In this dialog, the first paragraph has{" "}
              <code>
                tabindex=<q>-1</q>
              </code>
              . The first paragraph is also contained inside the element that
              provides the dialog description, i.e., the element that is
              referenced by <code>aria-describedby</code>. With some screen
              readers, this may have one negative but relatively insignificant
              side effect when the dialog opens -- the first paragraph may be
              announced twice. Nonetheless, making the first paragraph focusable
              and setting the initial focus on it is the most broadly accessible
              option.
            </p>
          </div>
          <div className={styles.dialog_form_actions}>
            <a href="#">link to help</a>
            <button type="button" onClick={handleOpenEndOfDepthModal}>
              accepting an alternative form
            </button>
            <button type="button" onClick={onClose}>
              Close
            </button>
          </div>
          {showEndOfDepthModal && (
            <EndOfDepthModal onClose={handleCloseEndOfDepth} />
          )}
        </div>
      </div>
    </ReactPortal>
  );
}

function EndOfDepthModal({ onClose }: ModalProps) {
  return (
    <ReactPortal wrapperId="portal-root-3">
      <div className={styles.backdrop}>
        <div
          id="dialog4"
          role="dialog"
          aria-labelledby="dialog4_label"
          aria-describedby="dialog4_desc"
          className={styles.dialog}
          aria-modal="true"
        >
          <h2 id="dialog4_label" className={styles.dialog_label}>
            End of the Road!
          </h2>
          <p id="dialog4_desc" className={styles.dialog_desc}>
            You activated a fake link or button that goes nowhere! The link or
            button is present for demonstration purposes only.
          </p>
          <div className={styles.dialog_form_actions}>
            <button type="button" id="dialog4_close_btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
}

function AddAddressModal({ onClose }: ModalProps) {
  return (
    <ReactPortal wrapperId="원하는-이름으로">
      <div className={styles.backdrop}>
        <div
          id="dialog3"
          role="dialog"
          aria-labelledby="dialog3_label"
          aria-describedby="dialog3_desc"
          aria-modal="true"
          className={styles.dialog}
        >
          <h2 id="dialog3_label" className={styles.dialog_label}>
            Address Added
          </h2>
          <p id="dialog3_desc" className={styles.dialog_desc}>
            The address you provided has been added to your list of delivery
            addresses. It is ready for immediate use. If you wish to remove it,
            you can do so from <a href="#">your profile.</a>
          </p>
          <div className={styles.dialog_form_actions}>
            <button type="button" id="dialog3_close_btn" onClick={onClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
}
