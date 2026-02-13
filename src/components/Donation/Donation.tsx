import { useState } from 'react'

import './Donation.css'

const Donation = () => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div id="Donation" className={ isOpen ? "open_donation" : "closed_donation" }>
      {!isOpen && <button onClick={() => setIsOpen(true)}>Donate</button>}

      {isOpen && <p>We are still in the process of aquiring our bussiness bank account.</p>}
      {isOpen && <p>In the meantime, you can use the following:</p>}

      <br />

      {isOpen && <p>Sasha Holm</p>}
      {isOpen && <p>Capitec</p>}
      {isOpen && <p>1891449565</p>}

      <br />

      {isOpen && <button onClick={() => setIsOpen(false)}>Cancel</button>}
    </div>
  )
}

export default Donation