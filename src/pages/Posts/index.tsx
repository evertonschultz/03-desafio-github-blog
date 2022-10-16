import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';
import { useNavigate } from "react-router-dom";
import { UserGit } from "../../contexts/UserContext";
import { api } from "../../lib/axios";

import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchPost";
import { PostContent, PostsContainer, SearchContainer } from "./styles";

export interface Issue {
  body: string;
  comments: number;
  created_at: string;
  id: number;
  title: string
  url: string;
  html_url: string;
  user: UserGit;
}

export interface Issues {
  items: Issue[];
  total_count: number
}

export function Posts() {
  const [issues, setissues] = useState<Issues>();

  const navigate = useNavigate();

  async function fetchIssues(query?: string) {
    if(query === undefined){
      query = ' '
    }
    
    const response = await api.get(`/search/issues?q=${query}repo:evertonschultz/03-desafio-github-blog`)

    setissues(response.data)
  }

  useEffect(() => {
    fetchIssues()
  },[]);
  
  return (
    <>
      <Profile />

      <SearchContainer>
        <div>
          <strong>Publicações</strong>
          <span>{issues?.total_count} publicações</span>
        </div>
        <SearchForm fetchIssues={fetchIssues} />
      </SearchContainer>

      <PostsContainer>
        {
          issues?.items.map(item => {
            return (
                <PostContent key={item.id} onClick={() => navigate('/post', {state: {data: item}})}>
                  <div>
                    <strong>{item.title}</strong>
                    <span>
                      {formatDistanceToNow(new Date(item.created_at), {
                        addSuffix: true,
                        locale: ptBR,
                      })}
                    </span>
                  </div>
                  <span>
                    <ReactMarkdown>{item.body}</ReactMarkdown>
                  </span>
                </PostContent>
            )
          })
        }
      </PostsContainer>
    </>
  )
}