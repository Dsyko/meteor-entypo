Package.describe({
    summary: "Meteorite package for adding entypo icon fonts to a Meteor project."
});

Package.on_use(function (api) {
    api.add_files('fonts/entypo-fontello.ttf', "client");
    api.add_files('fonts/entypo-fontello.svg', "client");
    api.add_files('fonts/entypo-fontello.eot', "client");
    api.add_files('fonts/entypo-fontello.woff', "client");
    api.add_files('fonts-entypo.css', "client");
});