import React from 'react';
import * as S from './Header.style';

import AddFileIcon from '../../assets/images/add-file-icon.svg';
import AvatarIcon from '../../assets/images/avatar-icon.svg';

type Props = {
  handleAddFile: () => void;
};

/**
 * The main header for the site
 */
function Header({ handleAddFile }: Props) {
  return (
    <S.Wrapper>
      <S.LeftContainer>
        <img src={AvatarIcon} alt="Add file" />
        Denish Pradana
      </S.LeftContainer>
      <div>
        <S.IconButton onClick={handleAddFile}>
          <img src={AddFileIcon} alt="Add file" />
        </S.IconButton>
      </div>
    </S.Wrapper>
  );
}

export default Header;
