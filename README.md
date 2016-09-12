# RandomColor.js
Apply random color for each element of some class in Javascript. Colors can be customized to fit your site colors perfectly.

# Syntax

```javascript
document.getElementsByClassName("divsToRandom").randomColor({
  //Parameters here
});
```
# Parameters
| Parameter | Description |
| --- | --- |
| opacity | Set alpha channel of each div |
| maxRed | Set maximum of Red channel |
| maxGreen | Set maximum of Green channel |
| maxRed | Set maximum of Red channel |
| minRed | Set minimum of Red channel |
| minGreen | Set minimum of Green channel |
| minRed | Set minimum of Red channel |

Each min and max Parameters can be a number between 0 and 255.
#Defaults
| Parameter | Its default |
| --- | --- |
| opacity | 0.5 |
| maxRed | 255 |
| maxGreen | 255 |
| maxRed | 255
| minRed | 0 |
| minGreen | 0 |
| minRed | 0 |

#Example
```javascript
document.getElementsByClassName("divsToRandom").randomColor({
  opacity:0.5,
  maxRed:0,
  maxBlue:0
});
// Setting maxRed and maxBlue to zero means that divs should contain many types of green.
```
![alt tag](http://i.imgur.com/8OXLISv.png)

#Live example
[Check RandColor on jsfiddle](https://jsfiddle.net/0w87986p/2/)
