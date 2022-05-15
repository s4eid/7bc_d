import axios from "axios";

export const upload_cloud = async (img_1, img_2, img_3) => {
  let imageArray = [img_1, img_2, img_3];
  let public_ids = [];
  let imageNewArray = [];
  try {
    for (let i = 0; i < imageArray.length; i++) {
      if (imageArray[i]) {
        const formData = new FormData();
        formData.append("file", imageArray[i]);
        formData.append("upload_preset", "oipp5ox6");
        const data = await axios.post(
          process.env.NEXT_PUBLIC_CLOUDINARY,
          formData
        );
        public_ids.push(data.data.public_id);
        imageNewArray.push(data.data.secure_url);
      } else {
        imageNewArray[i] = null;
        public_ids[i] = null;
      }
    }
    return { imageNewArray, public_ids };
  } catch (error) {
    console.log(error);
  }
};
