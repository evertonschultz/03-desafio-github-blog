import { ProfileBackground, ProfileContainer, ProfileContainerMobile, ProfileContent, ProfileContentMobile, ProfileDescription, ProfileDescriptionMobile, ProfileFooter, ProfileHeader, ProfileHeaderMobile, ProfileInfoMobile, ProfileUserMobile } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useContext } from "react";

import { UserContext } from "../../../../contexts/UserContext";

export function Profile() {
  const { user } = useContext(UserContext);

  function handleSeeOnGithub() {
    if (user?.html_url){
      const win = window.open(user.html_url, '_blank');
      win?.focus();
    }
  }

  if(user){
  return (
    <ProfileBackground>
      <ProfileContainer>
        <img src={user?.avatar_url} alt="Cameron Williamson" />
        <ProfileContent>
          <ProfileHeader>
            <strong>{user?.name ? user.name : user?.login}</strong>
            <button type="button" onClick={handleSeeOnGithub}>
              <span>GITHUB</span>
              <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" /></span>
            </button>
          </ProfileHeader>
          <ProfileDescription>
            <p>
              {user?.bio}
            </p>
          </ProfileDescription>
          <ProfileFooter>
            <div>
              <FontAwesomeIcon icon={faGithub} size="lg" color="#3A536B" />
              <span>{user?.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} size="1x" color="#3A536B" />
              <span>{user?.company}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} size="sm" color="#3A536B" />
              <span>{user?.followers} seguidores</span>
            </div>
          </ProfileFooter>
        </ProfileContent>
      </ProfileContainer>

      {/** MOBILE */}

      <ProfileContainerMobile>
        <ProfileHeaderMobile>
          <img src={user?.avatar_url} alt="Cameron Williamson" />
          <ProfileInfoMobile>
            <div>
              <div>
                <FontAwesomeIcon icon={faGithub} size="lg" color="#3A536B" />
              </div>
              <span>{user?.login}</span>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={faBuilding} size="1x" color="#3A536B" />
              </div>
              <span>{user?.company}</span>
            </div>
            <div>
              <div>
                <FontAwesomeIcon icon={faUserGroup} size="sm" color="#3A536B" />
              </div>
              <span>{user?.followers} seguidores</span>
            </div>
          </ProfileInfoMobile>
        </ProfileHeaderMobile>
        
      {/**Mobile Versin */}
        <ProfileContentMobile>
          <ProfileUserMobile>
            <strong>{user.name}</strong>
            <button type="button" onClick={handleSeeOnGithub}>
              <span>GITHUB</span>
              <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" /></span>
            </button>
          </ProfileUserMobile>
          <ProfileDescriptionMobile>
            <p>
              {user?.bio}
            </p>
          </ProfileDescriptionMobile>
        </ProfileContentMobile>
      </ProfileContainerMobile>
    </ProfileBackground>
  )} else {
    return (
      <ProfileContainer>
        <h1>Usuário não encontrado</h1>
      </ProfileContainer>
    )
  }
}