import { CommunityWriteForm, ImageUrlSend } from '@components/community/CommunityType';
import fetchPresignedUrl from './fetchPresignedUrl';
import uploadImageToS3 from './uploadImageToS3';

// 확장자와 파일 이름 뽑아내서 백엔드에서 presigned url 요청
async function processNewImage(data: CommunityWriteForm) {
  const images: ImageUrlSend[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const image of data.image) {
    if (image.file !== undefined) {
      const fileName = image.file.name;
      const fileNameSplitExtension = image.file.name.split('.');
      const fileNameExtension = fileNameSplitExtension[fileNameSplitExtension.length - 1];

      const imageInfo = await fetchPresignedUrl({
        fileName,
        fileNameExtension,
      });

      await uploadImageToS3(imageInfo.preSignedUrl, image.file);

      images.push({
        fileName: imageInfo.fileName,
        fileNameExtension,
        key: imageInfo.key,
      });
    }
  }

  return images;
}

export default processNewImage;
