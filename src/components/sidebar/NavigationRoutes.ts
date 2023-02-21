export interface INavigationRoute {
  name: string
  displayName: string
  meta: { icon: string }
  children?: INavigationRoute[]
}

export default {
  root: {
    name: '/',
    displayName: 'navigationRoutes.home',
  },
  routes: [
    {
      name: 'dashboard',
      displayName: 'Tổng quan',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard1',
      displayName: 'Tiền mặt',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard2',
      displayName: 'Tiền gử',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard3',
      displayName: 'Mua hàng',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard4',
      displayName: 'Bán hàng',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard5',
      displayName: 'Quản lý hóa đơn',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard6',
      displayName: 'Kho',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard7',
      displayName: 'Công cụ dụng cụ',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard8',
      displayName: 'Tài sản cố định',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard9',
      displayName: 'Thuế',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard10',
      displayName: 'Giá thành',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard11',
      displayName: 'Tổng hợp',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard12',
      displayName: 'Ngân sách',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard13',
      displayName: 'Báo cáo',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
    {
      name: 'dashboard14',
      displayName: 'Phân tích tài chính ',
      meta: {
        icon: 'vuestic-iconset-dashboard',
      },
    },
  ] as INavigationRoute[],
}
