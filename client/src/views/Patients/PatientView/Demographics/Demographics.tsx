import React from 'react';
import * as S from './Demographics.style';

type Props = {
  email: string;
  phoneNumber: string;
  address: string;
  idNumber: string;
  ethnicity: string;
  gender: string;
  age: string;
  occupation: string;
  nationality: string;
  maritalStatus: string;
};

function Demographics({
  age,
  maritalStatus,
  ethnicity,
  gender,
  occupation,
  nationality,
  idNumber,
  email,
  phoneNumber,
  address,
}: Props) {
  return (
    <S.Wrapper>
      <S.Section>
        <h2>Basic Information</h2>
        <S.Grid>
          <div>
            <S.Title>Nationality</S.Title>
            <S.Body>{nationality}</S.Body>
          </div>
          <div>
            <S.Title>ID/Passport number</S.Title>
            <S.Body>{idNumber}</S.Body>
          </div>
          <div>
            <S.Title>Age</S.Title>
            <S.Body>{age}</S.Body>
          </div>
          <div>
            <S.Title>Marital status</S.Title>
            <S.Body>{maritalStatus}</S.Body>
          </div>
          <div>
            <S.Title>Ethnicity</S.Title>
            <S.Body>{ethnicity}</S.Body>
          </div>
          <div>
            <S.Title>Gender</S.Title>
            <S.Body>{gender}</S.Body>
          </div>
          <div>
            <S.Title>Occupation</S.Title>
            <S.Body>{occupation}</S.Body>
          </div>
        </S.Grid>
      </S.Section>
      <S.Section>
        <h2>Contact Details</h2>
        <S.Grid>
          <div>
            <S.Title>Address</S.Title>
            <S.Body>{address}</S.Body>
          </div>
          <div>
            <S.Title>Phone number</S.Title>
            <S.Body>{phoneNumber}</S.Body>
          </div>
          <div>
            <S.Title>Email address</S.Title>
            <S.Body>{email}</S.Body>
          </div>
        </S.Grid>
      </S.Section>
    </S.Wrapper>
  );
}

export default Demographics;
