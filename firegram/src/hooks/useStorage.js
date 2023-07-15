import { useState, useEffect } from "react";
import { projectStorage } from '../firebase/config';


const useStorage = (file) => {

    const [Progress, setProgress] = useState(0)
    const [Error, setError] = useState(null)
    const [Url, setUrl] = useState(null)

    useEffect(() => {

        const storageRef = projectStorage.ref(file.name)

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            setUrl(url);
        })


    }, [file]);

return (Progress,Url, Error);

}

export default useStorage;