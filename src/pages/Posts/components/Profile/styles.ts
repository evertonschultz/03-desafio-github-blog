import styled from "styled-components";

export const ProfileBackground = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 800px) {
    padding: 0 1rem;
  }
`

export const ProfileContainer = styled.div`
  display: flex;
  width: 100%;

  max-width: 54rem;

  margin: 0 auto;

  background: ${props => props.theme["profile-700"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 2rem;
  gap: 2rem;
  margin-top: -5rem;

  @media (max-width: 800px) {
    display: none;
  }

  > img {
    height: 9.25rem;
    width: 9.25rem;

    border-radius: 8px;
  }
`
export const ProfileContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: space-between;
`

export const ProfileHeader = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  > strong {
    font-family: 'Nunito';
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 130%;

    color: ${props => props.theme.title};
  }

  > button {
    border: 0;
    background: transparent;

    cursor: pointer;
    padding: 0 0.25rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > span {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 160%;

      text-transform: uppercase;

      color: ${props => props.theme.blue};
    }
  }
`

export const ProfileDescription = styled.div`
  > p {
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    color: ${props => props.theme["text-100"]};
  }
`

export const ProfileFooter = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 800px) {
    display: none;
  }

  > div {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    > span {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;

      color: ${props => props.theme.subtitle};
    }
  }
`

//Moblie Version
export const ProfileContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  background: ${props => props.theme["profile-700"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 1rem;
  gap: 1rem;
  margin-top: -7rem;

  @media (min-width: 800px) {
    display: none;
  }
`

export const ProfileHeaderMobile = styled.div`
  display: flex;

  align-items: center;
  gap: 1rem;

  > img {
    height: 6.875rem;
    width: 6.875rem;

    border-radius: 8px;
  }
`

export const ProfileInfoMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    align-items: center;

    gap: 0.5rem;

    > span {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 1rem;
      line-height: 160%;

      color: ${props => props.theme.subtitle};
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.25rem;
    }
  }
`

export const ProfileContentMobile = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  gap: 0.5rem;
`

export const ProfileUserMobile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  > strong {
      font-family: 'Nunito';
      font-weight: 700;
      font-size: 1.5rem;
      line-height: 130%;

      color: ${props => props.theme.title};
    }

    > button {
      border: 0;
      background: transparent;

      cursor: pointer;
      padding: 0 0.25rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.4rem;

      > span {
        font-family: 'Nunito';
        font-style: normal;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 160%;

        text-transform: uppercase;

        color: ${props => props.theme.blue};
      }
    }
`

export const ProfileDescriptionMobile = styled.div`
  > p {
    font-family: 'Nunito';
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    color: ${props => props.theme["text-100"]};
  }
`
