// Service worker minimal pour MEDLOG IT Ops.
// But : rendre l'application installable (icône en barre des tâches) sans mettre
// les données en cache — chaque requête passe par le réseau, donc jamais de version figée.
self.addEventListener("install", (e)=>{ self.skipWaiting(); });
self.addEventListener("activate", (e)=>{ e.waitUntil(self.clients.claim()); });
self.addEventListener("fetch", (e)=>{ /* passe-plat réseau : pas de cache, toujours à jour */ });
