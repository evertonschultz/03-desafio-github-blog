import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  max-width: 54rem;

  margin: 4.5rem auto 3rem;

  gap: 0.75rem;

  @media (max-width: 800px) {
    padding: 0 1rem;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
  }

  > div {
    display: flex;
    justify-content: space-between;

    > strong {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 160%;

      color: ${props => props.theme.subtitle};
    }

    > span {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;

      color: ${props => props.theme["span-300"]};
    }
  }
`

export const PostsContainer = styled.div`
  max-width: 54rem;

  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  margin-bottom: 4rem;

  @media (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 1rem;
  }
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  background: ${props => props.theme["post-600"]};
  border-radius: 10px;
  border: 0;

  padding: 2rem;

  gap: 1.25rem;

  cursor: pointer;

  @media (max-width: 800px) {
    padding: 1rem;
  }

  > div {
    display: flex;

    align-items: flex-start;
    justify-content: space-between;

    > strong {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 160%;

      color: ${props => props.theme.title};

      width: 100%;
      max-width: 17.063rem;
    }

    > span {
      font-family: 'Nunito';
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 160%;
      text-align: right;

      color: ${props => props.theme["span-300"]};

      min-width: 3.313rem;
      max-width: 4.563rem;
    }
  }

  > span {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 160%;

    color: ${props => props.theme["text-100"]};

    display: -webkit-box;
    -webkit-line-clamp: 4;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
`
