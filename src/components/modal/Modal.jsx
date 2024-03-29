import "./Modal.css";
import React from "react";
import { useModal } from "../../context/ModalContext";
import { useEffect } from "react";

const Modal = () => {
  const { modalVisible, modalContent, hideModal } = useModal();

  const hello = "<h1>hello</h1>";

  const handleOverlayClick = (event) => {
    // Close the modal only if the overlay (not the content) is clicked
    if (event.target.className === "modal-overlay") {
      hideModal();
    }
  };

  return (
    <>
      {modalVisible && (
        <div className="modal-overlay" onClick={handleOverlayClick}>
          <div className="modal-content-container">
            {/* close icon */}
            <i
              onClick={hideModal}
              className="bx bx-window-close modal-close-button"
            ></i>
            <div className="modal-content">
              {/* image */}
              <div>
                <img
                  className="modal-content_image"
                  src={modalContent.image}
                  alt="project image"
                />
              </div>
              {/* content */}
              <div className="con">
                <h1 className="modal-content_title">{modalContent.title}</h1>
                <p className="modal-content_description">
                  {modalContent.description}
                </p>
                <div className="modal-content-stack">{modalContent.stack}</div>
                {modalContent.link ? (
                  <a
                    target="_blank"
                    href={modalContent.link}
                    className="project__button"
                  >
                    Demo
                    <i className="bx bx-right-arrow-alt project__button-icon"></i>
                  </a>
                ) : (
                  <p style={{ color: "red", font: "bold" }}>WORK IN PROGRESS</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
