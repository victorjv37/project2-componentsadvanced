import FooterImage from "./FooterImage";
import Paragraph from "./Paragraph";

const Footer = () => {
  return (
    <footer>
      <Paragraph footerText="TERMS AND CONDITIONS:"/>
      <FooterImage termsAndConditionsImage="https://ichef.bbci.co.uk/news/800/cpsprodpb/15665/production/_107435678_perro1.jpg"/>
    </footer>
  );
};

export default Footer;
