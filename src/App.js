import React, { useState } from "react";
import Calculator from "./Calculator";
import DarkMode from "./DarkMode";
import Info from "./Info";
import Modal from "./Modal/Modal";
import { ReactComponent as SvgInfo } from "./info.svg";

export default function App() {
  const [modal, setModal] = useState(false);
  return (
    <div
      className="bg-teal-400 text-purple-800 dark:bg-purple-800
     dark:text-teal-400 min-h-screen font-mainFont text-5xl sm:text-7xl" /* onClick={() => setModal(false)} */
    >
      <div  className="flex justify-between">
      <div className="w-5/6">
      <DarkMode />
        </div>
        <div className="flex mx-auto w-1/6">
          <button onClick={() => setModal(!modal)}>
            <SvgInfo className="w-20 h-20" />
          </button>
          <Modal modal={modal} setModal={setModal}>
            <Info />
          </Modal>
        </div>
      </div>
      <Calculator />
    </div>
  );
}
