audio-click is a Meteorite package for adding audio UI elements to a Meteor application.  It's not intended to be a full featured audio package, but may include additional audio UI elements in the future.

------------------------
## Installation

First, install the audio-click package from the command line, like so:

````
mrt add audio-click
````

------------------------
## Data/Document Model

Second, add the audioSoundsTemplate to your application, which adds all the necessary audio objects to the DOM.  

````
    {{> audioSoundsTemplate }}
````

------------------------
## Controllers

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
