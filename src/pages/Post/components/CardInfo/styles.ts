import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  max-width: 54rem;

  margin: 0 auto;

  background: ${props => props.theme["profile-700"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 2rem;
  gap: 2rem;
  margin-top: -5rem;


  @media (max-width: 800px) {
    padding: 1rem;
    margin-top: -8rem;
  }
`
export const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  justify-content: space-between;
`

export const CardHeader = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

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

export const CardTitle = styled.div`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 130%;

  color: ${props => props.theme.title};

  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
`

export const CardFooter = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  > div {
    display: flex;
    align-items: center;

    gap: 0.5rem;
  }
`
