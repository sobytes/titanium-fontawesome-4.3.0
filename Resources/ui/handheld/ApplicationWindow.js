//Application Window Component Constructor
function ApplicationWindow() {

    var IconicFont = require('inc/lib/IconicFont'),
    iconicFont = new IconicFont({
        font: 'inc/lib/FontAwesome'
    });

    //create component instance
    var self = Ti.UI.createWindow({
        backgroundColor : '#ffffff'
    });

    var bicycle = Ti.UI.createLabel({
        width : Ti.UI.SIZE,
        height : Ti.UI.SIZE,
        color : '#000000',
        font : {
            fontSize : '140dp',
            fontFamily : iconicFont.fontfamily
        },
        text : iconicFont.icon('fa-arrow-right'),
        textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
    });

    self.add(bicycle);

    return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
