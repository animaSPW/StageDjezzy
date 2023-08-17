import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, LabelList, ResponsiveContainer } from 'recharts';
import styles from '../assets/values/HourlyWeatherView.module.css';

const WeatherDayView = ({ HourlylyWeather, day }) => {
  const selectedDayWeather = HourlylyWeather[day];

  const chartData = selectedDayWeather.hourlyWeatherArray.map(hourData => ({
    hour: `${hourData.hour}:00`,
    temperature: hourData.temperature,
    weatherLogo: hourData.weatherLogo,
  }));

  /* the chart data is an array of objects that contains the hour and the temperature of each hour,
  the hour is the x axis and the temperature is the y axis
  */
  const minTemperature = Math.min(...chartData.map(dataPoint => dataPoint.temperature));
  const maxTemperature = Math.max(...chartData.map(dataPoint => dataPoint.temperature));
  const yAxisPadding = 1;
  const xAxisPadding = 14;

  const yDomain = [minTemperature, maxTemperature + yAxisPadding];
  const yRange = yDomain[1] - yDomain[0];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className={styles['custom-tooltip']}>
          <img src={data.weatherLogo} alt="Weather Logo" className={styles.weatherLogo} />
          <p className={styles['tooltip-temperature']}>{`${data.temperature}°C`} </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles['hourly-weather']}>
      <ResponsiveContainer width="100%" height={200} className={styles['chart-container']}>
        <LineChart data={chartData} margin={{ left: xAxisPadding, right: xAxisPadding }}>
          <XAxis dataKey="hour" interval={2} />
          <YAxis hide domain={[minTemperature - 5, maxTemperature + yAxisPadding + yRange * 0.2]} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#1d9bf0"  />
       
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherDayView;
