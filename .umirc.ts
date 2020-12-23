import { defineConfig } from 'umi';

export default defineConfig({
  publicPath:process.env.NODE_ENV === 'production' ? '/resume/dist/' : '/',
  history:{
    type:"hash"
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
