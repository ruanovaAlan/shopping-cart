import { ClearCartIcon, CartIcon } from './Icons'
import { useId } from 'react'
import './Cart.css'

export function Cart() {
  const cartCheckboxId = useId()

  return (
    <>
      <label htmlFor={cartCheckboxId} className='cart-button'>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>
        <ul>
          <li>
            <img src='https://cdn.dummyjson.com/product-images/1/thumbnail.jpg' alt='Iphone' />
            <div>
              <strong>Iphone</strong> - $1949
            </div>
            <footer>
              <small>
                Qty: 1
              </small>
            </footer>
            <button>+</button>
          </li>
        </ul>
        <button>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
