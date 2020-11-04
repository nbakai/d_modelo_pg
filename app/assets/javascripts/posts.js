document.addEventListener('DOMContentLoaded', function(){
    
    document.querySelector('#post_form').addEventListener('ajax:success', function(){
        var title = document.querySelector('#post_title');
        var content = document.querySelector('#post_content');
        title.value = '';
        content.value = '';
    })
})