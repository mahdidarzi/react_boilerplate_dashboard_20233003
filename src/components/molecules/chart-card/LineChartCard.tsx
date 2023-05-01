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
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

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
      borderColor: 'white',
      backgroundColor: 'white',
      borderRadius: 8,
      barThickness: 15,
    },
  ],
};

export const LineChartCard: FunctionComponent<Props> = ({
  icon = 'schedule',
  color = 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))',
  shadow = '',
  title = 'Website Views',
  value = 'Last Campaign Performance',
  footerText = 'campaign sent 2 days ago',
}) => {
  const ChartStyle = React.useMemo(() => ({ background: color, boxShadow: shadow }), [color, shadow]);

  return (
    <div className={Styles.base}>
      <div className={Styles.chart} style={ChartStyle}>
        <Line options={options} data={data} />
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
