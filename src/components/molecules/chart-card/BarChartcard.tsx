import React, { FunctionComponent } from 'react';
import Styles from './ChartCard.module.scss';

import { Icon } from 'components/atoms';

interface Props {
  icon?: string;
  color?: string;
  shadow?: string;
  title?: string;
  value?: string;
  footerText?: string;
}
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, Chart } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.3)',
      },
    },
    y: {
      ticks: {
        color: 'white',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.3)',
      },
    },
  },
  layout: {
    padding: {
      top: 0,
      left: 8,
      right: 0,
      bottom: 0,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Bar Chart',
    },
  },
};

const DATA_SETS = [
  { label: 'M', data: '100' },
  { label: 'T', data: '300' },
  { label: 'W', data: '200' },
  { label: 'T', data: '600' },
  { label: 'F', data: '500' },
  { label: 'S', data: '600' },
  { label: 'S', data: '400' },
];

const data = {
  labels: DATA_SETS.map((i) => i.label),
  datasets: [
    {
      label: '',
      data: DATA_SETS.map((i) => i.data),
      fill: false,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      borderRadius: 8,
      barThickness: 3,
    },
  ],
};

Chart.defaults.color = '#ff0000';

export const BarChartCard: FunctionComponent<Props> = ({
  icon = 'schedule',
  color = 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
  shadow = '',
  title = 'Website Views',
  value = 'Last Campaign Performance',
  footerText = 'campaign sent 2 days ago',
}) => {
  const ChartStyle = React.useMemo(() => ({ color, boxShadow: `0 0 16 ${shadow}` }), [color, shadow]);

  return (
    <div className={Styles.base}>
      <div className={Styles.chart} style={ChartStyle}>
        <Bar options={options} data={data} />
      </div>
      <div className={Styles.titleContainer}>
        <p className={Styles.title}>{title}</p>
        <p className={Styles.data}>{value}</p>
      </div>
      <hr className={Styles.devider} />
      <div className={Styles.footerContainer}>
        {icon && <Icon icon={icon} className={Styles.icon} />}
        <p className={Styles.footerText}>{footerText}</p>
      </div>
    </div>
  );
};
