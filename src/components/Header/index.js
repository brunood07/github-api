import React, { useState } from 'react';
import { Wrapper } from './styled';
import useGithub from '../../hooks/github-hooks';

const Header = () => {
    const { getUser } = useGithub();
    const [usernameSearch, setUsernameSearch] = useState();

    const submitGetUser = () => {
        if(!usernameSearch) return;
        return getUser(usernameSearch)
    };

    return(
        <header>
            <Wrapper>
                <input
                    type="text"
                    placeholder="Digite um username"
                    onChange={(event) => setUsernameSearch(event.target.value)}
                />
                <button type="submit" onClick={submitGetUser}>
                    <span>Buscar</span>
                </button>
            </Wrapper>
        </header>
    );
};

export default Header;