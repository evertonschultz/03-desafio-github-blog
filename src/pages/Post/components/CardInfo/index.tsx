import { CardContainer, CardContent, CardTitle, CardFooter, CardHeader } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faCalendarDay, faComment, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { Issue } from "../../../Posts";

interface IssueCardInfo {
  issue?: Issue
}

export function CardInfo({issue}: IssueCardInfo) {
  const navigate = useNavigate()

  function handleSeeOnGithub() {
    if (issue?.url){
      const win = window.open(issue.html_url, '_blank');
      win?.focus();
    }
  }

  if(issue){
  return (
    <CardContainer>
      <CardContent>
        <CardHeader>
          <button type="button" onClick={() => navigate('/')}>
            <span><FontAwesomeIcon icon={faChevronLeft} size="sm" /></span>
            <span>VOLTAR</span>
          </button>
          <button type="button" onClick={handleSeeOnGithub}>
            <span>VER NO GITHUB</span>
            <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" /></span>
          </button>
        </CardHeader>
        <CardTitle>
          <p>
            {issue.title}
          </p>
        </CardTitle>
        <CardFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} size="lg" color="#3A536B" />
            <span>{issue.user.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} size="lg" color="#3A536B" />
            <span>
              {formatDistanceToNow(new Date(issue.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} size="lg" color="#3A536B" />
            <span>{issue.comments} comentários</span>
          </div>
        </CardFooter>
      </CardContent>
    </CardContainer>
  )} else {
    return (
      <CardContainer>
        <h1>Desculpe mas esse post não foi encontrado...</h1>
      </CardContainer>
    )
  }
}