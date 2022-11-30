import React from 'react';

import { Card } from 'semantic-ui-react';
import moment from 'moment';

export const Weather = ({ data }) => {
  return (
    <>
      {data.main && (
        <Card>
          <Card.Content>
            <Card.Header className="header">{data.name}</Card.Header>
            <p>Temprature: {data.main.temp}</p>
            <p>
              Sunrise:{' '}
              {new Date(data.sys.sunrise * 1000).toLocaleTimeString('en-IN')}
            </p>
            <p>
              Sunset:{' '}
              {new Date(data.sys.sunset * 1000).toLocaleTimeString('en-IN')}
            </p>
            <p>Humanity: {data.main.humidity}%</p>
            <p>Avg Temprature: {data.main.temp}℃</p>{' '}
            <p>Description: {data.weather[0].description}</p>
            <p>Day: {moment().format('dddd')}</p>
            <p>Date: {moment().format('LL')}</p>
          </Card.Content>
          <button onClick={() => window.location.reload()}>
            Refresh_Location
          </button>
        </Card>
      )}
    </>
  );
};
