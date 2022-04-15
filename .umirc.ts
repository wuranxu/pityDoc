import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Pity测试平台',
  mode: 'site',
  base: '/pityDoc',
  logo: 'http://oss.pity.fun/picture/2022-2-27/1645951183315-image.png',
  publicPath: '/pityDoc/',
  navs: [
    null, // null 值代表保留约定式生成的导航，只做增量配置
    {
      title: '⭐ 点个Star',
      path: 'https://github.com/wuranxu/pity',
    },
    {
      title: '📖 开发文档',
      path: 'https://pity.readthedocs.io',
    },
  ],
  // more config: https://d.umijs.org/config
});
