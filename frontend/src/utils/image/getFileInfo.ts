const getFileInfo = (file: File) => {
  const fileName = file.name;
  const fileNameSplitExtension = file.name.split('.');
  const fileNameExtension = fileNameSplitExtension[fileNameSplitExtension.length - 1];

  return { fileName, fileNameExtension };
};

export default getFileInfo;
