import React, { useEffect, useState } from 'react';
import { 
  ApartmentListWrapper, 
  ApartmentItem, 
  Title, 
  Detail, 
  LoadingText, 
  ErrorText,
  PhotoGallery, 
  Photo 
} from './ApartmentDetail.style'; // Импортируем стили

const ApartmentList: React.FC = () => {
  const [apartments, setApartments] = useState<any[]>([]); // Состояние для списка квартир
  const [loading, setLoading] = useState<boolean>(true); // Статус загрузки
  const [error, setError] = useState<string | null>(null); // Ошибки, если они есть
  console.log(apartments);

  const fetchApartmentData = async () => {
    const url = 'https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'ca1a0f08ecmsha09f6280d89d312p1ece94jsn2b9deb7b436e', // Ваш API-ключ
        'x-rapidapi-host': 'bayut.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json(); // Данные в формате JSON
      if (response.ok) {
        setApartments(data.hits); // Обновляем состояние с полученными квартирами
        setLoading(false);
      } else {
        throw new Error('Ошибка при получении данных');
      }
    } catch (error: any) {
      setError(error.message); // Если произошла ошибка
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApartmentData(); // Вызываем запрос при монтировании компонента
  }, []);

  if (loading) {
    return <LoadingText>Загрузка...</LoadingText>;
  }

  if (error) {
    return <ErrorText>Ошибка: {error}</ErrorText>;
  }

  if (apartments.length === 0) {
    return <ErrorText>Нет доступных квартир.</ErrorText>;
  }

  return (
    <ApartmentListWrapper>
      <Title>Список доступных квартир</Title>
      {apartments.map((apartment, index) => {
        const { title, price, location, coverPhoto, photoIDs } = apartment;

        return (
          <ApartmentItem key={index}>
            <h3>{title}</h3>
            <Detail><strong>Цена:</strong> {price} AED</Detail>
            <Detail><strong>Местоположение:</strong> {location?.[0]?.name || 'Не указано'}</Detail>
            <Detail><strong>Размер:</strong> {apartment.area} кв.м</Detail>

            {/* Отображение основной фотографии (coverPhoto) */}
            <PhotoGallery>
              {coverPhoto && coverPhoto.url ? (
                <Photo key={coverPhoto.id} src={coverPhoto.url} alt={coverPhoto.title} />
              ) : (
                <ErrorText>Фото не доступны</ErrorText>
              )}

              {/* Отображение дополнительных фотографий по их ID */}
              {photoIDs && photoIDs.length > 0 && photoIDs.map((id: number, index: number) => {
                // Пример корректного URL для дополнительной фотографии
                const photoUrl = `https://bayut-production.s3.eu-central-1.amazonaws.com/image/${id}/image.jpg`;
                return (
                  <Photo
                    key={index}
                    src={photoUrl} // Формируем правильный URL для фотографии
                    alt={`Фото ${index + 1}`}
                  />
                );
              })}
            </PhotoGallery>
          </ApartmentItem>
        );
      })}
    </ApartmentListWrapper>
  );
};

export default ApartmentList;
