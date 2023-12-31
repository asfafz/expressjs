import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Toastmsg() {
    const notify = () => {
        toast.warn('🦄 Wow so easy!', {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>

    );
}

export default Toastmsg;