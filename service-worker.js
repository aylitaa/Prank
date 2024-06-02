self.addEventListener('notificationclick', function(event) {
    var gifUrl = event.notification.data.url; // Récupère l'URL du GIF à partir des données de la notification
    event.notification.close(); // Ferme la notification
    // Redirige l'utilisateur vers la page avec le GIF
    event.waitUntil(
        clients.openWindow(gifUrl) // Ouvre une nouvelle fenêtre avec l'URL du GIF
    );
});
