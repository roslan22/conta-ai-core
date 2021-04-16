import { MobXProviderContext } from 'mobx-react';
import React from 'react';
import { ParagraphsStore } from 'store/Paragraphs.store';
import { ContractsStore } from '../Contracts.store';
import { RootStore } from '../Root.store';
import { UIStore } from '../UIStore';
import { UsersStore } from '../Users.store';

function useRootStore(): RootStore {
  return React.useContext<RootStore>(MobXProviderContext as any);
}

export function useContractsStore(): ContractsStore {
  return useRootStore().contractsStore;
}

export function useUIStore(): UIStore {
  return useRootStore().uiStore;
}

export function useUsersStore(): UsersStore {
  return useRootStore().usersStore;
}

export function useParagraphsStore(): ParagraphsStore {
  return useRootStore().paragraphsStore;
}
