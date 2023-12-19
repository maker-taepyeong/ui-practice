"use client";

import React from "react";
import Modal from "@/components/Modal";
import useModal from "@/hooks/modal/useModal";
import Link from "next/link";
import styles from "@/styles/pages/modal.module.css";

function ModalPage() {
  const { isOpen, handleOpen, handleClose } = useModal();

  return (
    <div className={styles.container}>
      <Link href="/">Home</Link>
      <h1>Dialog</h1>
      <p>
        사용자가 중요한 정보에 집중하도록 강요하기 위해 사용하는 개념.
        일시적으로 웹페이지의 다른 기능을 사용할 수 없게 만든다.
      </p>
      <h2>점검 사항</h2>
      <ul>
        <li>
          Portal: 모달을 제어하기 위한 DOM 계층 구조, z-index 값을 추적하기 쉽게
          처리
        </li>
        <li>Backdrop: 반투명한 배경으로 나머지 콘텐츠를 비활성화</li>
        <li>Scroll Block: 모달이 열려있을 때는 스크롤 작동 불가</li>
      </ul>
      <button type="button" onClick={handleOpen}>
        Show Modal
      </button>
      {isOpen && <Modal onClose={handleClose} />}
    </div>
  );
}

export default ModalPage;
