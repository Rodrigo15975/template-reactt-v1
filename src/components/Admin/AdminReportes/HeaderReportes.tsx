import { Container, Header } from "@/components/Common";
import { TbReportSearch } from "react-icons/tb";
import AppAdminProfile from "../AdminProfile/AppAdminProfile";

const Reportes = () => {
  return (
    <Container>
      <Header
        title="Reportes"
        iconTitle={<TbReportSearch className="text-primary" />}
      >
        <AppAdminProfile />
      </Header>
    </Container>
  );
};

export default Reportes;
