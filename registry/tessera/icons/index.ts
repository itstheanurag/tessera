import { BESPOKE_ICONS } from "./bespoke-icons";
import { BESPOKE_ICONS_EXTRA } from "./bespoke-icons-extra";
import { BESPOKE_ICONS_BATCH3 } from "./bespoke-icons-batch3";
import { BESPOKE_ICONS_BATCH4 } from "./bespoke-icons-batch4";
import { BESPOKE_ICONS_BATCH5 } from "./bespoke-icons-batch5";

export {
  BESPOKE_CATEGORIES,
  type BespokeCategory,
  type BespokeIconDef,
  type BespokeIconProps,
} from "./bespoke-icons";

export const ALL_BESPOKE_ICONS = [
  ...BESPOKE_ICONS,
  ...BESPOKE_ICONS_EXTRA,
  ...BESPOKE_ICONS_BATCH3,
  ...BESPOKE_ICONS_BATCH4,
  ...BESPOKE_ICONS_BATCH5,
];
