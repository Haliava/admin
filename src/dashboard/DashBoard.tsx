// Dashboard.tsx
import * as React from 'react';
import { Card, CardContent, CardHeader } from '@mui/material';
import dataProvider from '../dataProvider'; 

const Dashboard: React.FC = () => {
  const [activeQuizzesCount, setActiveQuizzesCount] = React.useState<number>(0);

  const fetchActiveQuizzesCount = async () => {
    try {
      const { data } = await dataProvider.getActiveQuizzesCount();
      setActiveQuizzesCount(data);
    } catch (error) {
      console.error("Ошибка при получении количества активных квизов:", error);
    }
  };

  React.useEffect(() => {
    fetchActiveQuizzesCount();
  }, []);

  return (
    <div>
      {/* Карточка для отображения количества пользователей */}
      <Card style={{ marginBottom: '20px' , marginTop: '20px'}}>
        <CardHeader title="Пользователи" />
        {/* <CardContent>Количество пользователей: {stats.users}</CardContent> */}
      </Card>

      {/* Карточка для отображения количества квизов */}
      <Card style={{ marginBottom: '20px'}}>
        <CardHeader title="Квизы" />
        <CardContent>Активных квизов: {activeQuizzesCount}</CardContent>
      </Card>

      {/* Карточка для отображения количества промокодов */}
      <Card style={{ marginBottom: '20px' }}>
        <CardHeader title="Промокоды" />
        {/* <CardContent>Выданных промокодов: {stats.promoCodes}</CardContent> */}
      </Card>

    </div>
  );
};

export default Dashboard;
function fetchStats() {
  throw new Error('Function not implemented.');
}

