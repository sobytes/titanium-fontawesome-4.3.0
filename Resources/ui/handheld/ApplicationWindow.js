//Application Window Component Constructor
function ApplicationWindow() {

    var fontawesome = require('inc/lib/IconicFont').IconicFont({
        font : 'inc/lib/FontAwesome',
        ligature : false // optional
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
            fontFamily : fontawesome.fontfamily()
        },
        text : fontawesome.icon('fa-bicycle'),
        textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER
    });

    self.add(bicycle);

    return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
