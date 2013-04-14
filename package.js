//TODO:  Create audio package; publish to Atmosphere

Package.describe({
  summary: "Add a soft audio click to your user interface."
});


Package.on_use(function (api) {
    // 'templating' necessary for Spark powered Reactive Templates
    api.use('templating', 'client');

    // necessary for copying resource files into directories
    var path = Npm.require('path');
    api.add_files(path.join('audio', 'click1.wav'), 'client');

    // html files need to be added first
    api.add_files('audio.html', "client");
    api.add_files('audio.css', "client");

    // javascript files need to be added last
    api.add_files('audio.js', "client");
});
