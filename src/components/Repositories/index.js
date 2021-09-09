import React, { useEffect, useState } from 'react';
import useGithub from '../../hooks/github-hooks';
import RepositoryItem from '../Repository-item';
import { WrapperTabs, WrapperTabList, WrapperTab, WrapperTabPanel, WrapperList} from './styled';

const Repositories = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserSearchRepos, setHasUserSearchRepos] = useState(false);

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
        setHasUserSearchRepos(githubState.repositories);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [githubState.user.login]);

    return (
        <>
            {hasUserSearchRepos ? (
                <WrapperTabs
                    selectedTabClassName="is-selected"
                    selectedTabPanelClassName="is-selected"
                >
                    <WrapperTabList>
                        <WrapperTab>Repositories</WrapperTab>
                        <WrapperTab>Starred</WrapperTab>
                    </WrapperTabList>
                    <WrapperTabPanel>
                        <WrapperList>
                            {githubState.repositories.map((item) => (
                                <RepositoryItem 
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.full_name}
                                    fullName={item.full_name}
                                />
                            ))}
                        </WrapperList>
                    </WrapperTabPanel>
                    <WrapperTabPanel>
                        <WrapperList>
                            {githubState.starred.map((item) => (
                                <RepositoryItem 
                                    key={item.id}
                                    name={item.name}
                                    linkToRepo={item.html_url}
                                    fullName={item.full_name}
                                />
                            ))}
                        </WrapperList>
                    </WrapperTabPanel>
                </WrapperTabs> 
            ) : (
                <></>
            )}
        </>
    )
}

export default Repositories;