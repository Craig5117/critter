import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';
import './profileImage.css';
const Compress = require('compress.js');



function ProfileImage () {
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(false);
    const compress = new Compress();
    const uploadImage = async (e) => {
        const files = e.target.files;
        const resizedImg = await compress.compress([files[0]], {
            size: 1,
            quality: .75,
            maxWidth: 320,
            maxHeight: 320,
            resize: true,
        })
        const img = resizedImg[0];
        const base64str = img.data
        const imgExt = img.ext
        const resizedFile = await Compress.convertBase64ToFile(base64str, imgExt)

        const data = new FormData();
        data.append('file', resizedFile);
        data.append('upload_preset', 'critter');
        setLoading(true)
        const res = await fetch (
            '	https://api.cloudinary.com/v1_1/critter-cloud/image/upload/',
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json();
        setImage(file.secure_url)
        console.log(file.secure_url)
        setLoading(false)
    }
    return (
        <div>
            <label htmlFor="image-upload" id="image-upload-label"><Image
            className="w-100"
              src="https://res.cloudinary.com/critter-cloud/image/upload/v1616599800/critter/pjcea1yvidbctrgnnbru.jpg"
              roundedCircle
            /></label>
       <input style={{display:"none"}} name="file" id="image-upload" type="file" placeholder="Upload an image" onChange={uploadImage} />
        {loading ? (
            <h4>loading</h4>
        ): (<Image src={image} style={{width: '300px'}} roundedCircle ></Image>)
        }
        </div>
    )
}

export default ProfileImage;