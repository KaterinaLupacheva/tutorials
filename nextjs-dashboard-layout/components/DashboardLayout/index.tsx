import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import { Container, Content, PageContainer } from "./styles";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <Container>
      <Header />
      <Content>
        <Sidebar />
        <PageContainer>{children}</PageContainer>
      </Content>
      <Footer />
    </Container>
  );
}
