import { styled } from "styled-components";

const FooterWrapper = styled.div`
  height: 35px;
  position: fixed;
  bottom: 0;
  background-color: #f1f1f1;
  width: 100%;
  padding-top: 10px;
  margin-top: 20px;
`;

const OptxFooter = () => {
  return (
    <FooterWrapper>
      © 2024 Opteamix Solutions LLP. All Rights Reserved.
    </FooterWrapper>
  );
};

export default OptxFooter;
