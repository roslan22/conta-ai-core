import { formatDate } from '@components';
import { CONTRACT_PAGE_ROUTE } from '@constants';
import { Box, makeStyles, NavLink, Typography, Widget } from '@foundation';
import { ContractStore } from '@store';
import { observer } from 'mobx-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    cursor: 'pointer',
  },
  content: {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  created: {
    paddingBottom: spacing(1),
    opacity: 0.4,
  },
  aboutText: {
    paddingBottom: spacing(1),
  },
  about: {
    flex: 1,
    paddingRight: spacing(2),
  },
  chart: {
    width: 90,
    display: 'flex',
    justifyContent: 'center',
  },
}));

interface IProps {
  contract: ContractStore;
  userUuid: string;
}

export const ContractWidget: React.FC<IProps> = observer(function ContractWidget({ contract, userUuid }) {
  const { t } = useTranslation();
  const classes = useStyles();
  const history = useHistory();
  const CONTRACT_URL = `${CONTRACT_PAGE_ROUTE}/${userUuid}/${contract.uuid}`;

  const chartData = [
    { name: t('interfaceLabels.issues'), value: contract.amountOfIssues },
    { name: t('interfaceLabels.neutral'), value: contract.amountOfNeutral },
    { name: t('interfaceLabels.right'), value: contract.amountOfRight },
  ];

  const colors = ['#F81215', '#7491AA', '#7EB356'];

  const widgetClickHandler = () => {
    history.push(CONTRACT_URL);
  };

  return (
    <Widget className={classes.root} caption={contract.name} size='m' onClick={widgetClickHandler}>
      <Box className={classes.content}>
        <Box className={classes.about}>
          <Typography variant='body2' className={classes.created}>
            {formatDate(contract.dateCreated)}
          </Typography>
          <Typography variant='body1' className={classes.aboutText}>
            {contract.about}
          </Typography>
          <NavLink to={CONTRACT_URL} text={t('interfaceLabels.more')} />
        </Box>
        <Box className={classes.chart}>
          <PieChart width={90} height={90}>
            <Pie data={chartData} cx={40} cy={40} innerRadius={25} outerRadius={40} paddingAngle={5} dataKey='value'>
              {chartData.map((_, index) => (
                <Cell key={index} fill={colors[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </Box>
      </Box>
    </Widget>
  );
});
