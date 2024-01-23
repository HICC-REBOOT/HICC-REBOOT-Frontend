// img의 url을 읽는 함수
const readImageUrl = async (file: File): Promise<string> => {
  return new Promise<string>((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      const url = fileReader.result?.toString() ?? '';
      resolve(url);
    };
    fileReader.readAsDataURL(file);
  });
};

export default readImageUrl;
