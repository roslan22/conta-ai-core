import { ApplicationTheme } from '@foundation';
import { LangRouter, resources } from '@localization';
import { Root } from '@pages';
import { configureMobx, RootStore } from '@store';
import { observer, Provider as MobxProvider } from 'mobx-react';
import { SnackbarProvider } from 'notistack';
import React from 'react';

configureMobx();

const rootStore = new RootStore();

export const App: React.FC = observer(() => (
  <ApplicationTheme>
    <LangRouter resources={resources}>
      <MobxProvider {...rootStore}>
        <SnackbarProvider maxSnack={3}>
          <Root />
        </SnackbarProvider>
      </MobxProvider>
    </LangRouter>
  </ApplicationTheme>
));
