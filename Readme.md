**audio-click** is a Meteorite package for adding audio UI elements to a Meteor application.  It's not intended to be a full featured audio package, and is only intended to wire up simple clicks and beeps to buttons and other UI elements.  Currently supports adding sound to any javascript event, including clicks, taps, mouseup, mousedown, etc.

=========================
### Installation

First, install the audio-click package from the command line, like so:

````
mrt add audio-click
````

=========================
### Data/Document Model

Second, add the audioSoundsTemplate to your application, which adds all the necessary audio objects to the DOM.  

````
    {{> audioSoundsTemplate }}
````

=========================
### Controllers

Third, add the following line to any event you want to play a click. 
````
    document.getElementById('clickAudioClip').play();  
````


For instance, you might have a reactive template wired up like this:

````js
    Template.sampleListItem.events({  
        'click': function(evt){  
            document.getElementById('clickAudioClip').play();  
            // do something fancy when clicked...
        }  
    });  
````

=========================
### License

MIT License. Use as you wish, including for commercial purposes.  


