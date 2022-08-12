import { StackPublicDefinitions } from "./types";

import {GalleryStack} from "@features/Gallery";

export const routes = {
  [StackPublicDefinitions.GALLERY]: {
    name: StackPublicDefinitions.GALLERY,
    component: GalleryStack,
  },
};
