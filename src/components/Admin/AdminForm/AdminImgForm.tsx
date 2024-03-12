import img from "./img/imgLogin.webp";
import { Image } from "antd";
export const AdminImgForm = () => {
  return (
    <article className=" max-md:hidden flex-[0_1_50rem] max-lg:flex-[0_1_30rem] flex items-center justify-center rounded-3xl bg-primary">
      {/* IOntentar arreglar el minh- para adatpar altura de pantallas */}
      <Image
        height={"auto"}
        width={"100%"}
        fallback={img}
        alt="Artes-Pizarro"
      />
    </article>
  );
};
