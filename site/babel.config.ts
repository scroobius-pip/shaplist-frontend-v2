const plugins = [
  [
    'babel-plugin-direct-import',
    { modules: ['@mui/material', '@mui/icons-material'] },
  ],
];

const presets = ['next/babel'];

export default { plugins, presets };