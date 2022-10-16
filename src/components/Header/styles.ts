import styled from "styled-components";

import coverSvg from '../../assets/cover.svg';

export const HeaderContainer = styled.div`
  background-image: url(${coverSvg});
  background-repeat: no-repeat;

  display: flex;
  justify-content: center;

  width: 100%;
  max-width: 90rem;
  height: 18.5rem;

  margin: 0 auto;

  @media (max-width: 800px) {
    margin-top: -4.375rem;
  }

  > img {
    max-width: 9.25rem;
    max-height: 6.125rem;
    margin-top: 4rem;

    @media (max-width: 800px) {
      max-width: 7.375rem;
      max-height: 4.875rem;
      margin-top: 5.875rem;
    }
  }
`