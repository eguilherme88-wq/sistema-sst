self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{
  if(event.request.mode==='navigate')event.respondWith(fetch(event.request).catch(()=>new Response('<!doctype html><html lang="pt-BR"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Partner · Sem conexão</title><body style="background:#1b1d1b;color:#edeae0;font:18px system-ui;padding:32px"><h1>Você está sem conexão</h1><p>Conecte-se à internet para usar o Partner e acessar seus dados.</p><button onclick="location.reload()">Tentar novamente</button></body></html>',{headers:{'Content-Type':'text/html; charset=utf-8'},status:503})));
});
