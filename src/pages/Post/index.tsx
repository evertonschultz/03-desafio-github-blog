import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Issue } from '../Posts';

import { CardInfo } from "./components/CardInfo";
import { PostContent, PostContainer, PostBackground } from "./styles";

export function Post() {
  const [issue, setIssue] = useState<Issue>();

  const { state } = useLocation()

  useEffect(() => {
    setIssue(state.data)
  }, [])
  
  if(issue){
  return (
    <PostBackground>
      <CardInfo issue={issue} />

      <PostContainer>
        <PostContent>
          <ReactMarkdown>{issue?.body ? issue.body : ''}</ReactMarkdown>
        </PostContent>
      </PostContainer>
    </PostBackground>
  )} else {
    return <CardInfo />
  }
}