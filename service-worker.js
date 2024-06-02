self.addEventListener('notificationclick', function(event) {
    var gifUrl = event.notification.data.url;
    event.notification.close(); // Ferme la notification
    // Redirige l'utilisateur vers la page avec le GIF
    event.waitUntil(
        clients.openWindow(gifUrl)
    );
});

