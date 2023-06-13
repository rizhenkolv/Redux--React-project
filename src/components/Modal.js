import React from 'react'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice'
import { useDispatch, useSelector } from 'react-redux'

const Modal = () => {
  const dispatch = useDispatch()
  const { cartItems, total, amount } = useSelector((store) => store.cart)
  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>remove all your items from the shopping cart</h4>
        <div className='btn-container'>
          <button
            className='btn confirm-btn'
            onClick={() => {
              dispatch(clearCart())
              dispatch(closeModal())
            }}
          >
            confirm
          </button>
          <button
            className='btn clear-btn'
            onClick={() => dispatch(closeModal())}
          >
            cancell
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Modal
