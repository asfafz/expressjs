import userEvent from '@testing-library/user-event';
import { deleteApp } from 'firebase/app';
import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
const UploadForm = () => {

    const [filename, setfilename] = useState(null);
    const [error, seterror] = useState(null);

    const filetype = ['image/jpeg', 'image/png']

    const onchangehandler = (e) => {

        let selected = e.target.files[0];
        if (selected && filetype.includes(selected.type)) {
            setfilename(selected)
            seterror('')
            console.log(selected)
        } else {
            setfilename(null)
            seterror('please select png or mpeg file type')
        }
    }
    return (
        <form>
            <input type='file' onChange={onchangehandler} />
            <div>
               { error && <span>{error}</span>  }
            </div>
            <hr/>
            {filename && <div>{filename.name}</div>}
            {filename && <ProgressBar />}
        </form>
    )
}
export default UploadForm;
