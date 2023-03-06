# easylazyloadjs
A simple, dependency free, easy to use lazy loading javascript library.


## Usage

In order to use the library, just add the image source as a data attribute to the <img> tags you want to lazy load and 
import the lazyLoad function of the easylazyload.js file and call the init method. Thats it.

```
<img src="" data-img="http://via.placeholder.com/640x360" />
```


```
import lazyLoad from 'path/to/easylazyload.js';

lazyLoad.init();
```
