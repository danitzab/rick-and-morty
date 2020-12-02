import styled from "styled-components";

export const ImgWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 120px;
  height: 120px;
`;

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover; //Para que la imagen se ajuste
  position: absolute;
  top: 0;
  width: 100%;
`;
