export interface ImageInfoForPresignedUrl {
  fileName: string;
  fileNameExtension: string;
}

export interface PresignedUrlInfo {
  fileName: string;
  key: string;
  preSignedUrl: string;
}
