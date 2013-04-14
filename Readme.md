// add the audioSoundsTemplate to your application  
    {{> audioSoundsTemplate }}


// then trigger the audio clip in your events, like so:  
    Template.packageTestTemplate.events({  
        'click': function(evt){  
            document.getElementById('clickAudioClip').play();  
        }  
    });  

