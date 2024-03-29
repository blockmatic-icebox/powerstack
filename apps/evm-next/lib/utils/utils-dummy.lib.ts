export const getRandomDate = (from: number = 7, to: number = 0) => {
  // returns random date between two days before current date
  const getDateFromNowMinusNumberOfDays = (num: number) => {
    const now = new Date()

    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - num)
  }

  const start = getDateFromNowMinusNumberOfDays(from)
  const end = getDateFromNowMinusNumberOfDays(to)
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
}

export const getRandomFloat = (): string => parseFloat(`${Math.random() * (56.01 - 51.99) + 51.99}`).toFixed(2)

export const dummy_boards = [
  {
    id: 1,
    type: 'discussion',
    phase: 'discussion',
    title: 'Vivamus tristique fermentum euismod.',
    votes_percentage: '',
    budget: '',
    kpi: '',
    author: 'massmuscles3',
    new_time: '',
    dead_line: '',
    time: '',
    description:
      'Vivamus sem augue, lacinia tincidunt ante vel, eleifend tincidunt purus. Donec porttitor leo eu dignissim pharetra. Curabitur eget rhoncus orci, in volutpat justo. Praesent vehicula neque purus, ac finibus erat tincidunt vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu enim viverra, molestie mi at, viverra metus. Etiam dignissim ornare turpis, et pharetra nulla maximus at. Nam pulvinar sollicitudin erat at fringilla.',
    child_boards: [],
    parent_board: 0,
    publish_date: '2022-09-03T20:02:37.530Z',
    updated_at: '',
    time_decreasing: false,
    amend_reason: '',
  },
  {
    id: 2,
    type: 'proposal',
    phase: 'voting',
    title: 'Hire EOS Community Manager.',
    votes_percentage: '55.84',
    author: 'andlerdev',
    budget: '4000.00 BANK',
    kpi: 'Lorem ipsum dolor sit amet consort ert sit.',
    new_time: '',
    dead_line: 'December 15 2022',
    time: '2022-11-25T07:34:46.407Z',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultricies libero ut magna vulputate, id consectetur est vehicula. Ut euismod augue erat, non fringilla mauris dictum at. Quisque congue semper mauris at auctor. Quisque cursus sapien ut tellus vehicula, nec convallis nunc iaculis. Curabitur posuere tortor a vestibulum bibendum. Integer eget mi nec lectus ullamcorper egestas a in nulla. Morbi est mi, ornare nec fermentum id, porta at justo.\n\n    Vivamus sem augue, lacinia tincidunt ante vel, eleifend tincidunt purus. Donec porttitor leo eu dignissim pharetra. Curabitur eget rhoncus orci, in volutpat justo. Praesent vehicula neque purus, ac finibus erat tincidunt vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu enim viverra, molestie mi at, viverra metus. Etiam dignissim ornare turpis, et pharetra nulla maximus at. Nam pulvinar sollicitudin erat at fringilla.',
    child_boards: [],
    parent_board: 0,
    publish_date: '2022-09-23T12:46:56.591Z',
    updated_at: '2022-10-03T06:18:42.047Z',
    time_decreasing: false,
    amend_reason: '',
  },
  {
    id: 3,
    type: 'proposal',
    phase: 'debate',
    author: 'gaboesquivel',
    title: 'In efficitur euismod orci a laoreet.',
    votes_percentage: '53.50',
    budget: '2000.00 BANK',
    new_time: '',
    dead_line: 'December 23th, 2022',
    time: '2022-12-10T07:34:46.407Z',
    kpi: 'Lorem ipsum dolor sit amet consort ert sit.',
    description:
      'Vivamus urna nisl, scelerisque ut nibh vitae, euismod auctor est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi imperdiet nulla quis viverra suscipit. Proin in placerat dolor. Suspendisse commodo mauris vel elit hendrerit ultrices. Curabitur bibendum, sem in eleifend viverra, eros sem pretium augue, at pretium ipsum ex vitae turpis. Sed egestas, ipsum vel blandit finibus, sapien libero ullamcorper lacus, quis commodo dui lacus ac massa. Nullam iaculis lectus sit amet lorem suscipit tempor. Quisque non congue turpis. Quisque elementum in leo ac imperdiet. Duis pulvinar interdum ultricies. Ut vehicula suscipit justo. Phasellus purus massa, suscipit quis nibh nec, mollis pellentesque lectus.',
    child_boards: [15],
    parent_board: 0,
    publish_date: '2022-09-23T06:18:42.047Z',
    updated_at: '2022-09-23T06:18:42.047Z',
    time_decreasing: false,
    amend_reason: 'Lorem ipsum dolor euismod auctor est',
  },
  {
    id: 4,
    type: 'amendment_edit',
    phase: 'rejected',
    author: 'leeosfirst',
    title: 'Ut ipsum nunc, facilisis.',
    votes_percentage: '52.33',
    budget: '7000.00 BANK',
    new_time: '',
    dead_line: 'Dec 18, 2022',
    time: '2022-11-28T12:34:46.407Z',
    kpi: 'Lorem ipsum dolor sit amet consort ert sit.',
    description:
      'Vivamus urna nisl, scelerisque ut nibh vitae, euismod auctor est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi imperdiet nulla quis viverra suscipit. Proin in placerat dolor. Suspendisse commodo mauris vel elit hendrerit ultrices. Curabitur bibendum, sem in eleifend viverra, eros sem pretium augue, at pretium ipsum ex vitae turpis. Sed egestas, ipsum vel blandit finibus, sapien libero ullamcorper lacus, quis commodo dui lacus ac massa. Nullam iaculis lectus sit amet lorem suscipit tempor. Quisque non congue turpis. Quisque elementum in leo ac imperdiet. Duis pulvinar interdum ultricies. Ut vehicula suscipit justo. Phasellus purus massa, suscipit quis nibh nec, mollis pellentesque lectus.',
    child_boards: [],
    parent_board: 12,
    publish_date: '2022-08-03T21:17:25.386Z',
    updated_at: '2022-09-23T06:18:42.047Z',
    time_decreasing: false,
    amend_reason: '',
  },
  {
    id: 5,
    type: 'proposal',
    phase: 'voting',
    title: 'Hire One EOS Community Manager.',
    votes_percentage: '54.98',
    budget: '7000.00 BANK',
    kpi: 'Lorem ipsum dolor sit amet consort ert sit.',
    author: 'lolabonnie11',
    new_time: '',
    dead_line: 'December 15th 2022',
    time: '2022-11-23T07:34:46.407Z',
    description:
      'Donec porttitor in volutpat justo. Praesent vehicula neque purus, ac finibus erat tincidunt vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu enim viverra, molestie mi at, viverra metus. Etiam dignissim ornare turpis, et pharetra nulla maximus at. Nam pulvinar sollicitudin erat at fringilla.',
    child_boards: [],
    parent_board: 0,
    publish_date: '2022-07-01T09:16:09.368Z',
    updated_at: '2022-07-20T06:18:42.047Z',
    time_decreasing: false,
    amend_reason: '',
  },
  {
    id: 6,
    type: 'discussion',
    phase: 'discussion',
    title: 'Lacinia Tincidunt Ante Vel.',
    votes_percentage: '',
    budget: '',
    kpi: '',
    author: 'massivebrain',
    new_time: '',
    dead_line: '',
    time: '2022-11-22T23:34:46.407Z',
    description:
      'Vivamus sem augue, lacinia tincidunt ante vel, eleifend tincidunt purus. Donec porttitor leo eu dignissim pharetra. Curabitur eget rhoncus orci, in volutpat justo. Praesent vehicula neque purus, ac finibus erat tincidunt vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu enim viverra, molestie mi at, viverra metus. Etiam dignissim ornare turpis, et pharetra nulla maximus at. Nam pulvinar sollicitudin erat at fringilla.',
    child_boards: [],
    parent_board: 0,
    publish_date: '2022-08-22T16:29:55.228Z',
    updated_at: '',
    time_decreasing: false,
    amend_reason: '',
  },
  {
    id: 7,
    type: 'discussion',
    phase: 'discussion',
    title: 'Donec Porttitor.',
    votes_percentage: '',
    budget: '',
    kpi: '',
    author: 'anaksanamum',
    new_time: '',
    dead_line: '',
    time: '2022-11-24T04:34:46.407Z',
    description:
      'Vivamus sem augue, lacinia tincidunt ante vel, eleifend tincidunt purus. Donec porttitor leo eu dignissim pharetra. Curabitur eget rhoncus orci, in volutpat justo. Praesent vehicula neque purus, ac finibus erat tincidunt vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu enim viverra, molestie mi at, viverra metus. Etiam dignissim ornare turpis, et pharetra nulla maximus at. Nam pulvinar sollicitudin erat at fringilla.',
    child_boards: [],
    parent_board: 0,
    publish_date: '2022-07-17T22:03:21.517Z',
    updated_at: '',
    time_decreasing: false,
    amend_reason: '',
  },
  {
    id: 8,
    type: 'proposal',
    phase: 'pre-vote',
    author: 'gaboesquivel',
    title: 'In euismod laoreet.',
    votes_percentage: '53.50',
    budget: '2000.00 BANK',
    new_time: '',
    dead_line: 'December 20 2022',
    time: '2022-11-23T07:34:46.407Z',
    kpi: 'Lorem ipsum dolor sit amet consort ert sit.',
    description:
      'Vivamus urna nisl, scelerisque ut nibh vitae, euismod auctor est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi imperdiet nulla quis viverra suscipit. Proin in placerat dolor. Suspendisse commodo mauris vel elit hendrerit ultrices. Curabitur bibendum, sem in eleifend viverra, eros sem pretium augue, at pretium ipsum ex vitae turpis. Sed egestas, ipsum vel blandit finibus, sapien libero ullamcorper lacus, quis commodo dui lacus ac massa. Nullam iaculis lectus sit amet lorem suscipit tempor. Quisque non congue turpis. Quisque elementum in leo ac imperdiet. Duis pulvinar interdum ultricies. Ut vehicula suscipit justo. Phasellus purus massa, suscipit quis nibh nec, mollis pellentesque lectus.',
    child_boards: [3],
    parent_board: 0,
    publish_date: '2022-09-23T06:18:42.047Z',
    updated_at: '2022-09-23T06:18:42.047Z',
    time_decreasing: false,
    amend_reason: '',
  },
  {
    id: 9,
    type: 'amendment_edit',
    phase: 'voting',
    author: 'pilujustpilu',
    title: 'Efficitur euismod orci a laoreet.',
    votes_percentage: '53.50',
    budget: '2000.00 BANK',
    new_time: '',
    dead_line: 'Dec 5, 2022',
    time: '2022-12-05T07:34:46.407Z',
    kpi: 'Lorem ipsum dolor sit amet consort ert sit.',
    description:
      'Vivamus urna nisl, scelerisque ut nibh vitae, euismod auctor est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi imperdiet nulla quis viverra suscipit. Proin in placerat dolor. Suspendisse commodo mauris vel elit hendrerit ultrices. Curabitur bibendum, sem in eleifend viverra, eros sem pretium augue, at pretium ipsum ex vitae turpis. Sed egestas, ipsum vel blandit finibus, sapien libero ullamcorper lacus, quis commodo dui lacus ac massa. Nullam iaculis lectus sit amet lorem suscipit tempor. Quisque non congue turpis. Quisque elementum in leo ac imperdiet. Duis pulvinar interdum ultricies. Ut vehicula suscipit justo. Phasellus purus massa, suscipit quis nibh nec, mollis pellentesque lectus.',
    child_boards: [],
    parent_board: 4,
    publish_date: '2022-09-23T06:18:42.047Z',
    updated_at: '2022-09-23T06:18:42.047Z',
    time_decreasing: false,
    amend_reason: '',
  },
  {
    id: 10,
    type: 'proposal',
    phase: 'approved',
    title: 'Hire EOS Community Manager.',
    votes_percentage: '53.68',
    budget: '7500.00 BANK',
    kpi: 'Lorem ipsum dolor sit amet consort ert sit.',
    author: 'lolabonnie11',
    new_time: '',
    dead_line: 'December 1st 2022',
    time: '2022-11-23T04:34:46.407Z',
    description:
      'Donec porttitor in volutpat justo. Praesent vehicula neque purus, ac finibus erat tincidunt vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu enim viverra, molestie mi at, viverra metus. Etiam dignissim ornare turpis, et pharetra nulla maximus at. Nam pulvinar sollicitudin erat at fringilla.',
    child_boards: [],
    parent_board: 5,
    publish_date: '2022-08-09T04:51:41.108Z',
    updated_at: '2022-08-13T06:18:42.047Z',
    time_decreasing: false,
    amend_reason: '',
  },
  {
    id: 11,
    type: 'proposal',
    phase: 'rejected',
    title: 'Vivamus tristique fermentum euismod.',
    votes_percentage: '53.14',
    budget: '400.00 BANK',
    author: 'xxxjavierxxx',
    new_time: '',
    dead_line: 'Dec 15th 2022',
    time: '2022-11-20T04:34:46.407Z',
    description:
      'Vivamus sem augue, lacinia tincidunt ante vel, eleifend tincidunt purus. Donec porttitor leo eu dignissim pharetra. Curabitur eget rhoncus orci, in volutpat justo. Praesent vehicula neque purus, ac finibus erat tincidunt vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin eu enim viverra, molestie mi at, viverra metus. Etiam dignissim ornare turpis, et pharetra nulla maximus at. Nam pulvinar sollicitudin erat at fringilla.',
    child_boards: [],
    parent_board: 2,
    publish_date: '2022-09-08T04:53:45.107Z',
    updated_at: '2022-09-23T06:18:42.047Z',
    time_decreasing: false,
    amend_reason: '',
  },
  {
    author: 'andlerz52254',
    type: 'proposal',
    phase: 'debate',
    id: 12,
    parent_board: 2,
    child_boards: [4, 13, 14],
    title: 'The proposal with amendments',
    description:
      'This is a long proposal description, so pay attention!!!\n\nSuspendisse dolor mi, imperdiet eget magna eu, aliquam tempor libero. Cras at arcu sollicitudin, luctus est at, efficitur dui. Quisque eget mollis enim. Phasellus non nisi at ligula aliquam dapibus et non nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean nec porta tortor, a elementum est. Pellentesque urna est, interdum vitae dapibus id, ultrices vel ex. Curabitur euismod malesuada lectus rutrum mollis.\n\nSuspendisse tempus turpis a ex posuere viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ut ipsum nisi. Vestibulum efficitur, purus in ultrices consectetur, est orci tincidunt eros, quis aliquam leo ante nec nunc. Proin blandit viverra pellentesque. Etiam eleifend volutpat libero, egestas vehicula odio porta a. Cras efficitur enim sollicitudin, fringilla ligula eget, eleifend dui. Aenean porttitor est id consequat varius. Vivamus vulputate sapien non metus viverra tincidunt. In ex lacus, viverra imperdiet elit a, aliquet semper odio. Fusce cursus tortor a ultricies malesuada.\n\nDonec suscipit consectetur nulla ac pretium. Duis consectetur orci sed tortor laoreet, a faucibus lorem pellentesque. Etiam id ipsum urna. Quisque quis euismod odio. Sed at odio vel mauris sagittis commodo sit amet in purus. Mauris fringilla est nec nunc euismod aliquam. Aliquam erat volutpat. Suspendisse ultricies risus vel accumsan blandit. Ut a erat sodales, dictum odio eu, semper dolor. Etiam pretium turpis vel blandit blandit. Sed nec massa sit amet diam pretium eleifend. Aliquam erat volutpat. Aliquam erat volutpat. Proin eu finibus nisl, vitae viverra quam.',
    kpi: 'To keep everything interesting for next 7 years',
    budget: '10500.00 BANK',
    publish_date: '2022-10-29T03:58:48.699Z',
    updated_at: '2022-09-23T06:18:42.047Z',
    new_time: '',
    dead_line: 'December 12th, 2022',
    time: '2022-12-02T03:00:48.699Z',
    votes_percentage: '54.25',
    time_decreasing: false,
    amend_reason: '[NOW I HAVE IT RIGHT 2 !!] It is too much information to handle.',
  },
  {
    author: 'andlerz52254',
    type: 'amendment_edit',
    phase: 'voting',
    id: 13,
    parent_board: 12,
    child_boards: [],
    title: 'The newest proposal, EVER!',
    description:
      'This is a long proposal description, so pay attention!!!\n\nSuspendisse dolor mi, imperdiet eget magna eu, aliquam tempor libero. Cras at arcu s\nSuspendisse tempus turpis a ex posuere viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ut ipsum nisi. Vestibulum efficitur, purus in ultrices consectetur, est orci tincidunt eros, quis aliquam leo ante nec nunc. Proin blandit viverra pellentesque. Etiam eleifend volutpat libero, egestas vehicula odio porta a. Cras efficitur enim sollicitudin, fringilla ligula eget, eleifend dui. Aenean porttitor est id consequat varius. Vivamus vulputate sapien non metus viverra tincidunt. In ex lacus, viverra imperdiet elit a, aliquet semper odio. Fusce cursus tortor a ultricies malesuada.\n\nDonec suscipit consectetur nulla ac pretium. Duis consectetur orci sed tortor laoreet, a faucibus lorem pellentesque. Etiam id ipsum urna. Quisque quis euismod odio. Sed at odio vel mauris sagittis commodo sit amet in purus. Mauris fringilla est nec nunc euismod aliquam. Aliquam erat volutpat. Suspendisse ultricies risus vel accumsan blandit. Ut a erat sodales, dictum odio eu, semper dolor. Etiam pretium turpis vel blandit blandit. Sed nec massa sit amet diam pretium eleifend. Aliquam erat volutpat. Aliquam erat volutpat. Proin eu finibus nisl, vitae viverra quam.',
    kpi: 'To keep everything interesting for next 7 years',
    budget: '10500.00 BANK',
    publish_date: '2022-11-03T07:22:19.851Z',
    updated_at: '2022-11-09T06:18:42.047Z',
    new_time: '',
    dead_line: 'December 15th, 2022',
    time: '2022-11-10T07:23:34.404Z',
    votes_percentage: '52.60',
    time_decreasing: false,
    amend_reason: 'It is too much information to think in short time.',
  },
  {
    author: 'andlerz52254',
    type: 'amendment_time',
    phase: 'approved',
    id: 14,
    parent_board: 12,
    child_boards: [],
    title: 'The newest proposal, EVER!',
    description:
      'Suspendisse dolor mi, imperdiet eget magna eu, aliquam tempor libero. Cras at arcu s\nSuspendisse tempus turpis a ex posuere viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec ut ipsum nisi. Vestibulum efficitur, purus in ultrices consectetur, est orci tincidunt eros, quis aliquam leo ante nec nunc. Proin blandit viverra pellentesque. Etiam eleifend volutpat libero, egestas vehicula odio porta a. Cras efficitur enim sollicitudin, fringilla ligula eget, eleifend dui. Aenean porttitor est id consequat varius. Vivamus vulputate sapien non metus viverra tincidunt. In ex lacus, viverra imperdiet elit a, aliquet semper odio. Fusce cursus tortor a ultricies malesuada.\n\nDonec suscipit consectetur nulla ac pretium. Duis consectetur orci sed tortor laoreet, a faucibus lorem pellentesque. Etiam id ipsum urna. Quisque quis euismod odio. Sed at odio vel mauris sagittis commodo sit amet in purus. Mauris fringilla est nec nunc euismod aliquam. Aliquam erat volutpat. Suspendisse ultricies risus vel accumsan blandit. Ut a erat sodales, dictum odio eu, semper dolor. Etiam pretium turpis vel blandit blandit. Sed nec massa sit amet diam pretium eleifend. Aliquam erat volutpat. Aliquam erat volutpat. Proin eu finibus nisl, vitae viverra quam.',
    kpi: 'To keep everything interesting for next 7 years',
    budget: '10500.00 BANK',
    publish_date: '2022-11-04T07:22:19.851Z',
    updated_at: '2022-11-13T06:18:42.047Z',
    new_time: '2022-11-28T07:26:43.238Z',
    dead_line: 'December 15th, 2022',
    time: '2022-10-21T07:26:01.743Z',
    votes_percentage: '52.60',
    time_decreasing: false,
    amend_reason: 'It is too short information to think in a short time... Very short.',
  },
  {
    id: 15,
    type: 'amendment_time',
    phase: 'pre-vote',
    title: 'Morbi suscipit lacus a enim imperdiet.',
    votes_percentage: '54.02',
    author: 'andlereosdev',
    budget: '600.00 BANK',
    new_time: '2022-11-25T07:16:43.238Z',
    dead_line: 'Dec 12, 2022',
    time: '2022-11-27T07:22:43.238Z',
    description:
      'Vestibulum sit amet libero nec arcu malesuada luctus. Pellentesque congue justo dui, ut sollicitudin magna tincidunt et. Mauris non vehicula nibh. Sed tincidunt neque sed velit aliquam, a aliquam velit fringilla. Nullam faucibus non massa eu aliquam. Praesent scelerisque, urna id viverra sollicitudin, mi mauris bibendum sem, quis euismod sapien diam sit amet velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque facilisis facilisis dolor a tristique. Cras aliquam sit amet dolor quis scelerisque. Fusce sodales erat blandit ex efficitur, ac suscipit eros aliquam. Proin blandit imperdiet massa eu gravida. Curabitur finibus orci vel mi vulputate, in auctor lectus tristique. Fusce sed arcu posuere, fringilla nunc eu, imperdiet neque.',
    child_boards: [],
    kpi: 'To keep everything interesting for next 7 years',
    parent_board: 3,
    publish_date: '2022-11-03T07:26:43.238Z',
    updated_at: '2022-11-12T06:18:42.047Z',
    time_decreasing: true,
    amend_reason: 'It is too much information to handle. Seriously.',
  },
]
