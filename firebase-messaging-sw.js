importScripts('https://www.gstatic.com/firebasejs/5.5.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.5.1/firebase-messaging.js');

//var config = {
//    messagingSenderId: "879694680989"
//};

var config = {
    apiKey: "AIzaSyA1gZ4W94TSclXzlDOgSwB95N8C4oRCQkA",
    authDomain: "proxnotification.firebaseapp.com",
    databaseURL: "https://proxnotification.firebaseio.com",
    projectId: "proxnotification",
    storageBucket: "proxnotification.appspot.com",
    messagingSenderId: "879694680989"
};


firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
    console.log('Received background message ', payload);
    //var _options = {
    //    body: payload.data.body
    //};
    //self.registration.showNotification(payload.data.title, _options);

    const _title = payload.data.title;
    const _options = {
        body: payload.data.body
        ,icon: '/icon/ms-icon-310x310.png',
        click_action: 'https://yahoo.com.tw'
    };

    return self.registration.showNotification(_title, _options);

});

console.log("Loaded prox SW..");

//function ShowNotification(title, body) {
//    notification = new Notification(title, {
//        icon: '/icon/ms-icon-310x310.png',
//        body: body,
//        onclick: function () {
//            parent.focus();
//            window.focus(); //just in case, older browsers
//            this.close();
//        }
//    })
//}