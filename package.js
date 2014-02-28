Package.describe({
    summary: "Meteorite package for adding entypo icon fonts to a Meteor project."
});

Package.on_use(function (api) {
    api.add_files('fonts/entypo.ttf', "client");
    api.add_files('fonts/entypo.svg', "client");
    api.add_files('fonts/entypo.eot', "client");
    api.add_files('fonts/entypo.woff', "client");
    api.add_files('fonts-entypo.css', "client");
});