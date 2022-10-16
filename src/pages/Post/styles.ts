import styled from "styled-components";

export const PostBackground = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  @media (max-width: 800px) {
    padding: 1rem;
  }
`

export const PostContainer = styled.div`
  max-width: 54rem;

  margin: 0 auto;

  margin-bottom: 4rem;
`

export const PostContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 2.5rem 2rem;

  border-radius: 10px;
  border: 0;

  gap: 1.25rem;
`
