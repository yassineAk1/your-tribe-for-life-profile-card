import { createDirectus, rest } from '@directus/sdk';

export const directus = createDirectus('https://fdnd.directus.app').with(rest());
