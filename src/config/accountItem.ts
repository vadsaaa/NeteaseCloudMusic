/**
 * 账号页面, 子功能
 */

const config = [
  {
    rowKey: 1,
    cells: [{ dataIndex: 'message', title: '我的消息', icon: require('../images/Account/cm2_set_icn_mail.png') }]
  },
  {
    rowKey: 2,
    cells: [
      { dataIndex: 'vip', title: '会员中心', icon: require('../images/Account/cm2_set_icn_vip.png') },
      { dataIndex: 'store', title: '商城', icon: require('../images/Account/cm2_set_icn_store.png') },
      { dataIndex: 'free', title: '在线听歌免流量', icon: require('../images/Account/cm2_set_icn_combo.png') }
    ]
  },
  {
    rowKey: 3,
    cells: [
      { dataIndex: 'settings', title: '设置', icon: require('../images/Account/cm2_set_icn_set.png') },
      { dataIndex: 'qrcode', title: '扫一扫', icon: require('../images/Account/cm2_set_icn_scan.png') },
      {
        dataIndex: 'skin',
        title: '个性换肤',
        subtitle: '官方红',
        icon: require('../images/Account/cm2_set_icn_skin.png')
      },
      {
        dataIndex: 'ui',
        title: '夜间模式',
        switch: true,
        icon: require('../images/Account/cm2_set_icn_night.png')
      },
      { dataIndex: 'timing', title: '定时关闭', icon: require('../images/Account/cm2_set_icn_time.png') },
      { dataIndex: 'alarm_clock', title: '音乐闹钟', icon: require('../images/Account/cm2_set_icn_alamclock.png') },
      { dataIndex: 'drive_mode', title: '驾驶模式', icon: require('../images/Account/cm2_set_icn_vehicle.png') }
    ]
  },
  {
    rowKey: 4,
    cells: [
      { dataIndex: 'share', title: '分享网易云音乐', icon: require('../images/Account/cm2_set_icn_share.png') },
      { dataIndex: 'about', title: '关于', icon: require('../images/Account/cm2_set_icn_about.png') }
    ]
  }
]

export default config
