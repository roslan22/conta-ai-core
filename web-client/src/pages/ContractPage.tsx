import { Contract } from '@components';
import { Loading, Page } from '@foundation';
import { useContractsStore } from '@store';
import { observer } from 'mobx-react';
import React from 'react';
import { useParams } from 'react-router-dom';

const ContractPage: React.FC = observer(function ContractPage() {
  const params: { uuid: string; userUuid: string } = useParams();
  const contractsStore = useContractsStore();
  const currentContract = contractsStore.getContract(params.uuid);

  React.useEffect(() => {
    if (!currentContract) {
      contractsStore.init(params.userUuid);
    }
  }, []);

  return (
    <>
      {currentContract ? (
        <Page caption={currentContract.name}>
          <Contract contract={currentContract} />
        </Page>
      ) : (
        <Loading />
      )}
    </>
  );
});

export { ContractPage as default };
