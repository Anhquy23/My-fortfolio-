import footer from "@/components/footer";
import header from "@/components/header";
import AboutPage from "./AboutPage";
import BlogPage from "./BlogPage";
import ContactPage from "./ContactPage";
import FortfolioPage from "./FortfolioPage";
import ResumePage from "./ResumePage";

const HomePage = () => {
  return `
    ${header()}
    ${AboutPage()}
    ${ResumePage()}
    ${FortfolioPage()}
    ${BlogPage()}
    ${ContactPage()}
    ${footer()}
  `;
}

export default HomePage