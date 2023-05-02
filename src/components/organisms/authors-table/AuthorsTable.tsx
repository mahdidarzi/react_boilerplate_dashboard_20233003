import React, { FunctionComponent } from 'react';
import Styles from './AuthorsTable.module.scss';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { Table } from 'components/molecules/table';
import { FormattedMessage } from 'react-intl';
import { ProfileImage } from 'components/atoms';

export type Authors = {
  image: string;
  name: string;
  email: string;
  jobTitle: string;
  jobDes: string;
  date: string;
  status: string;
};

const defaultData: Authors[] = [
  {
    image: 'https://demos.creative-tim.com/material-dashboard-react/static/media/home-decor-1.05e218fd495ccc65c99d.jpg',
    name: 'John Michael',
    email: 'john@creative-tim.com',
    jobTitle: 'Manager',
    jobDes: 'Organization',
    status: 'ONLINE',
    date: '23/04/18',
  },
];

const columnHelper = createColumnHelper<Authors>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Name',
    cell: (info) => {
      const data = info.row.original;
      return (
        <div className="d-flex flex-grow-1">
          <ProfileImage src={data.image} medium rounded />
          <div className="d-flex flex-column ms-2">
            <p className="m-0 ">{info.getValue()}</p>
            <p className="m-0">{data.email}</p>
          </div>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('name', {
    header: 'Function',
    cell: (info) => {
      const data = info.row.original;
      return (
        <div className="d-flex flex-column ms-2">
          <p className="m-0 ">{data.jobTitle}</p>
          <p className="m-0">{data.jobDes}</p>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => {
      const style = {
        width: 'fit-content',
        fontSize: 10,
        padding: '2px 4px',
        borderRadius: '0.375rem',
        background: 'linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))',
        color: 'rgb(255, 255, 255)',
      };
      return (
        <div>
          <div style={style}>{info.getValue()}</div>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('date', {
    header: 'Employed',
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor('name', {
    header: 'Action',
    cell: (info) => {
      const data = info.row.original;
      return (
        <div className="d-flex flex-column ms-2">
          <p className="m-0 ">EDIT</p>
        </div>
      );
    },
    footer: (info) => info.column.id,
  }),
];
export const AuthorsTable: FunctionComponent = () => {
  return (
    <div className={Styles.base}>
      <div className={Styles.header}>
        <FormattedMessage id="authors_table" />
      </div>
      <div className={Styles.container}>
        <Table defaultData={defaultData} columns={columns as any} />
      </div>
    </div>
  );
};
