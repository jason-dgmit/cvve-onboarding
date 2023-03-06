import { menu } from '../../../admin';
import { client, dmmf } from '../config';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreateTenentResource = () => ({
  resource: {
    model: dmmf.modelMap.Tenent,
    client,
  },
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    parent: menu.prisma,
  },
});
