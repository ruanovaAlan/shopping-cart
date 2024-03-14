import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
  const { filters } = useFilters()
  return (
    <footer className='footer'>
      {/* <h4>Prueba técnica</h4>
      <span>@midudev react course</span>
      <h5>Shopping Cart con useContext & useReducer</h5> */}
      {
        JSON.stringify(filters, null, 2)
      }
    </footer>
  )
}
