// /**
//  * Copyright @ by Code Lyoko Team. All rights reserved.
//  * Author: Thành Nam Nguyễn
//  */

import { createTheme } from '@mui/material/styles';

const extTheme = createTheme({
  colorSchemes: { light: true, dark: true },
  cssVariables: {
    colorSchemeSelector: 'data',
  },
});

export default extTheme;
