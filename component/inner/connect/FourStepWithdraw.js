import React from 'react'
import Link from 'next/link'
const FourStepWithdraw = () => {
  return (
    <>
    <form>
      <h2>Thank You </h2>

      <div className="input-group-items d-flex flex-column gap-4">
        <div className="input-group">
          <p>A confirmation has been sent to your email. Soon you will be contacted by one of our representative.</p>
        </div>

        <div className="go-back-btn">
       <Link href='/'>
       <button>
          &larr; &nbsp; GO BACK
          </button>
       </Link>
        </div>
      </div>
    </form>
  </>
  )
}

export default FourStepWithdraw