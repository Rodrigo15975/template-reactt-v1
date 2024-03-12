import type { UploadProps } from "antd";
import { Upload } from "antd";
import { toast } from "react-toastify";
const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: false,
  
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      // console.log(info.file, info.fileList);
    }
    if (status === "done") {
      toast.info("Archivo cargado exitosamente", {
        position: "top-right",
        autoClose: 2000,
      });
      console.log(info);
    } else if (status === "error") {
      toast.error(`${info.file.name} file upload failed.`, {
        autoClose: 2000,
        position: "top-right",
      });
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};

export { Dragger, props };
