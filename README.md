Introduction
-----

This npm module will help you to search youtube api and you can tell how many records you required to be pulled form youtube per API request.

Usage
-----

```javascript
import {YT} from 'izap-youtube-search'
YT({key: <youtube developer key>, term: <search term>, maxResults: 50},function(response){
    //here you will get response.
});
```