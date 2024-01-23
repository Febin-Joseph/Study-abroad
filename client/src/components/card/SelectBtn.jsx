import React from 'react'

const SelectBtn = () => {
  return (
    <div className="card-actions justify-center">
      <button
        className="btn bg-blue-20 text-white-10 w-[150px] hover:text-black hover:font-extrabold"
        onClick={() => document.getElementById('selectBtn').showModal()}
      >
        Select
      </button>

      {/* caution popup for select button */}
      <dialog id="selectBtn" className="modal">
        <div className="modal-box">
          <div role="alert" className="alert alert-warning">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
            <span>Warning: Work Inprogress!</span>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  )
}

export default SelectBtn