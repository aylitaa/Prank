self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('https://aylitaa.github.io/Prank/')
    );
});
