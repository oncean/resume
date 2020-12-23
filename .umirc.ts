import { defineConfig } from 'umi';

export default defineConfig({
  publicPath:process.env.NODE_ENV === 'production' ? '/static/resume/' : '/',
  title: '王伟康-个人简历',
  history:{
    type:"hash"
  },
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
});
