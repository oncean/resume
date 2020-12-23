import { defineConfig } from 'umi';

export default defineConfig({
  base:"/resume/dist",
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
