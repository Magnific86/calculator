import React from 'react'
import cl from "./Modal.module.css"

export default function Modal({children, modal, setModal}) {

const className = [cl.myModal]

if(modal) {
  className.push(cl.active)
}

  return (
    <div className={className.join(' ')} onClick={() => setModal(false)}>
      <div className={cl.myModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
