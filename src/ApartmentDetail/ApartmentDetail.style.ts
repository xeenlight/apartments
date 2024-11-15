// src/ApartmentList.style.ts
import styled from 'styled-components';

export const ApartmentListWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ApartmentItem = styled.div`
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;

  h3 {
    margin-top: 0;
  }

  img {
    max-width: 100%;
    height: auto;
    margin-top: 10px;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const Detail = styled.p`
  font-size: 1rem;
  color: #666;
`;

export const LoadingText = styled.div`
  font-size: 1.5rem;
  color: #333;
`;

export const ErrorText = styled.div`
  font-size: 1.5rem;
  color: red;
`;

export const PhotoGallery = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
`;

export const Photo = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 10px;
  max-width: 300px;
  margin-right: 10px;
  border-radius: 8px;
`;
