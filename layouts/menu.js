export default {
  items: [
    {
      name: 'Dashboard',
      url: '/',
      icon: 'icon-speedometer',
    },
    {
      title: true,
      name: 'Hoge',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Categories',
      url: '/categories',
      icon: 'icon-drop'
    },
    {
      title: true,
      name: 'Fuga',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Dropdown',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/sample2',
          icon: 'icon-puzzle'
        },
      ]
    },
  ]
}
