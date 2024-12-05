console.log('Servicio Worker: Funcionando');
self.addEventListener('fetch',(currentEvent) =>{
    console.log('Fetching',currentEvent);
});