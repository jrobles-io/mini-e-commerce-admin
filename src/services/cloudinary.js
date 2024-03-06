import axios from 'axios'

export const imageUpload = (e) => {

    const uploadData = new FormData();

    uploadData.append("file", e.target.files[0]);
    uploadData.append("upload_preset", "nn5z9zvq")

    return axios.post('https://api.cloudinary.com/v1_1/nn5z9zvq/image/upload', uploadData)
}
