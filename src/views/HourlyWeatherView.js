import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, LabelList, ResponsiveContainer } from 'recharts';
import styles from '../assets/values/HourlyWeatherView.module.css';

const WeatherDayView = ({ HourlylyWeather, day }) => {
  const selectedDayWeather = HourlylyWeather[day];

  const chartData = selectedDayWeather.hourlyWeatherArray.map(hourData => ({
    hour: `${hourData.hour}:00`,
    temperature: hourData.temperature,
  }));

  const minTemperature = Math.min(...chartData.map(dataPoint => dataPoint.temperature));
  const maxTemperature = Math.max(...chartData.map(dataPoint => dataPoint.temperature));
  const yAxisPadding = 1;
  const xAxisPadding = 10;

  // Ajuster la hauteur en définissant le domaine de l'axe Y
  const yDomain = [minTemperature, maxTemperature + yAxisPadding];
  const yRange = yDomain[1] - yDomain[0];
  const adjustedYDomain = [minTemperature - 5, maxTemperature + yAxisPadding + yRange * 0.2]; // Réduire la hauteur de 20%

  return (
    <div className={styles['hourly-weather']}>
      <ResponsiveContainer width="100%" height={200} className={styles['chart-container']}>
        <LineChart data={chartData} margin={{ left: xAxisPadding, right: xAxisPadding }}>
          <XAxis dataKey="hour" interval={2} />
          <YAxis hide domain={adjustedYDomain} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" dot={{ r: 6 }} />
          <LabelList dataKey="temperature" position="top" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherDayView;
