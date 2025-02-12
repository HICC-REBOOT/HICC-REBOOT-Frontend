import fetchPresignedUrl from './fetchPresignedUrl';
import getFileInfo from './getFileInfo';
import uploadImageToS3 from './uploadImageToS3';

// 확장자와 파일 이름 뽑아내서 백엔드에서 presigned url 요청
async function processNewImage(file: File) {
  const { fileName, fileNameExtension } = getFileInfo(file);

  const imageInfo = await fetchPresignedUrl({
    fileName,
    fileNameExtension,
  });

  await uploadImageToS3(imageInfo.preSignedUrl, file);

  return imageInfo;
}

export default processNewImage;
