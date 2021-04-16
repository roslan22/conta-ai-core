import { Box, makeStyles, PageSection } from '@foundation';
import { useContractsStore } from '@store';
import { observer } from 'mobx-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ContractWidget } from './ContractWidget';

const useStyles = makeStyles(({ spacing }) => ({
  contracts: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
}));

interface IProps {
  userUuid: string;
}

export const MyContracts: React.FC<IProps> = observer(function MyContracts({ userUuid }) {
  const { t } = useTranslation();
  const classes = useStyles();
  const contractsStore = useContractsStore();

  React.useEffect(() => {
    contractsStore.init(userUuid);
  }, []);

  return (
    <PageSection caption={t('captions.myContracts')}>
      <Box className={classes.contracts}>
        {contractsStore.contracts.map((с) => (
          <ContractWidget key={с.uuid} userUuid={userUuid} contract={с} />
        ))}
      </Box>
    </PageSection>
  );
});
