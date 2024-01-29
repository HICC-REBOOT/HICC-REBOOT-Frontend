import request from '@utils/request';
import { ImageInfoForPresignedUrl, PresignedUrlInfo } from './imageType';

const fetchPresignedUrl = async (data: ImageInfoForPresignedUrl) => {
  const response = await request<ImageInfoForPresignedUrl, PresignedUrlInfo, null>({
    uri: '/api/s3',
    method: 'post',
    data,
  });

  return response.data;
};

export default fetchPresignedUrl;
