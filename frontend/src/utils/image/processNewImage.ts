import fetchPresignedUrl from './fetchPresignedUrl';
import uploadImageToS3 from './uploadImageToS3';

// 확장자와 파일 이름 뽑아내서 백엔드에서 presigned url 요청
async function processNewImage(file: File) {
  const fileName = file.name;
  const fileNameSplitExtension = file.name.split('.');
  const fileNameExtension = fileNameSplitExtension[fileNameSplitExtension.length - 1];

  const imageInfo = await fetchPresignedUrl({
    fileName,
    fileNameExtension,
  });

  await uploadImageToS3(imageInfo.preSignedUrl, file);

  return imageInfo.url;
}

export default processNewImage;
