import React from 'react';
import { Translation } from 'react-i18next';

import Card from '../components/cards/Card';

const Home = () => {
  return (
    <Translation ns={['layout']}>
      {
        (t, { i18n }) =>
        <Card>
          <Card.Body>
            <Card.Title title={t('ReOKR')} />
          </Card.Body>
        </Card>
      }
    </Translation>
  );
};

export default Home;
