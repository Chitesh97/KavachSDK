// Statically load all "local" components that aren't yet in the npm package

import NavBar from './src/components/override-sdk/infra/NavBar/';
import AppAnnouncement from './src/components/override-sdk/widget/AppAnnouncement/';
/* import end - DO NOT REMOVE */

// localSdkComponentMap is the JSON object where we'll store the components that are
// found locally. If not found here, we'll look in the Pega-provided component map

const localSdkComponentMap = {
  NavBar,
  AppAnnouncement
  /* map end - DO NOT REMOVE */
};

export default localSdkComponentMap;
