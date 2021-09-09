import React from 'react';
import useGithub from '../../hooks/github-hooks';
import { 
    Wrapper,
    WrapperInfoUser,
    WrapperStatusCount,
    WrapperUserGeneric,
    WrapperImage
} from './styled';

const Profile = () => {
    const { githubState } = useGithub();

    return (
        <Wrapper>
            <WrapperImage src={githubState.user.avatar} alt="Avatar do Usuário"/>
            <WrapperInfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                    <WrapperUserGeneric>
                        <h3>Username:</h3>
                        <a
                            href={githubState.user.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {githubState.user.login}
                        </a>
                    </WrapperUserGeneric>
                    <WrapperUserGeneric>
                        <h3>Company:</h3>
                        <span>{githubState.user.company}</span>
                    </WrapperUserGeneric>
                    <WrapperUserGeneric>
                        <h3>Location:</h3>
                        <span>{githubState.user.location}</span>
                    </WrapperUserGeneric>
                    <WrapperUserGeneric>
                        <h3>Blog:</h3>
                        <a
                            href={githubState.user.blog}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {githubState.user.blog}
                        </a>
                    </WrapperUserGeneric>
                </div>
                <WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>{githubState.user.followers}</span>
                    </div>
                    <div>
                        <h4>Followings</h4>
                        <span>{githubState.user.following}</span>
                    </div>
                    <div>
                        <h4>Gists</h4>
                        <span>{githubState.user.public_gists}</span>
                    </div>
                    <div>
                        <h4>Repos</h4>
                        <span>{githubState.user.public_repos}</span>
                    </div>
                </WrapperStatusCount>
            </WrapperInfoUser>
        </Wrapper>
    )
};

export default Profile;