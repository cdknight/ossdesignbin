let $ = require('jquery') 
const {ipcRenderer} = require('electron');
$('#blender_btn').click(function(){
    ipcRenderer.send('send_msg', 'blender')
});

$('#gimp_btn').click(function(){
    ipcRenderer.send('send_msg', 'gimp')
});
$('#inkscape_btn').click(function(){
    ipcRenderer.send('send_msg', 'inkscape')
   
   
});
$('#krita_btn').click(function(){
    ipcRenderer.send('send_msg', 'krita')
});
$('#kdenlive_btn').click(function(){
    ipcRenderer.send('send_msg', 'kdenlive')
});
$('#openshot_btn').click(function(){
    ipcRenderer.send('send_msg', 'openshot')
});

$('#darktable_btn').click(function(){
    ipcRenderer.send('send_msg', 'darktable')
    $('#inkscape_btn').css('cursor:not-allowed');
    ipcRenderr.on('darktable_success', (event, arg) =>{
        $('#inkscape_btn').css('cursor:default');
    })
});