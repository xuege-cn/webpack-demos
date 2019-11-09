document.body.addEventListener('click', function(){
    import('./data.js').then(function({ data }){
        console.log(data);
    })
})