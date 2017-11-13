chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('res/window/main.html', {
        id: 'main',
        resizable: false,
        state: "normal",
        bounds: {
            'width': 300,
            'height': 450
        },
        frame: {
            type: 'none'
        }
    });
});
