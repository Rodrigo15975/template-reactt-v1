import { FC, ReactNode } from "react";
import { Title } from "..";

type PropsHeader = {
  title: string;
  children?: ReactNode;
  iconTitle?: ReactNode;
};

const Header: FC<PropsHeader> = ({ title, children, iconTitle }) => {
  return (
    <div className="border justify-between text-2xl title-common font-robotoSlab_700 rounded-xl flex items-center p-4 border-primary/50 shadow-sm h-[4rem]">
      <Title label={title} className="flex items-center gap-4" type="h1">
        {iconTitle}
      </Title>
      {children}
    </div>
  );
};

export default Header;
