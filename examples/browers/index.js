console.log(111, hpSentinel)
window.hpSentinel.init({
    // debug: true,
    silentConsole: true,
    maxBreadcrumbs: 10,
    dsn: 'http://localhost:7001/api/v1/log/report',
    projectName: 'test',
    throttleDelayTime: 0,
    onRouteChange(from, to) {
      console.log('onRouteChange: _', from, to);
    }
  })
  

  // const slsTracker = new AliyunSlsTracker({
//   host: 'ap-northeast-1.log.aliyuncs.com',
//   project: 'frontend-tracking-hk',
//   logstore: 'tracking-log'
// })