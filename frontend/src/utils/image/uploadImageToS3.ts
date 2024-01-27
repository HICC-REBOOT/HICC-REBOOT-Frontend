import axios from 'axios';

async function uploadImageToS3(presignedUrl: string, file: File) {
  const response = await axios.put(presignedUrl, file);

  if (response.status !== 200) {
    console.log('S3 오류');
  }
}

export default uploadImageToS3;
