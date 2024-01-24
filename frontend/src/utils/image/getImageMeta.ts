import readImageUrl from './readImageUrl';

interface Image {
  file?: File;
  src: string;
}
const getImageMetas = async (files: FileList) => {
  const imageMeta: Image[] = [];

  const fileList = Array.from(files);
  // eslint-disable-next-line no-restricted-syntax
  for (const file of fileList) {
    const url = await readImageUrl(file);
    imageMeta.push({ file, src: url });
  }

  return imageMeta;
};

export default getImageMetas;
