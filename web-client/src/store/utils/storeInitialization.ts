import { configure } from 'mobx';

export function configureMobx(): void {
  configure({ enforceActions: 'always' });
}
