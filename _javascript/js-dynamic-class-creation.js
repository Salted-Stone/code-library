if (typeof styleSheet === 'undefined') {
    var styleSheetElement = document.createElement('style');
    styleSheetElement.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(styleSheetElement);

    for (i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].disabled) {
        continue;
      }
      styleSheet = document.styleSheets[i];
    }

    mediaType = typeof styleSheet.media;
  }

  if (mediaType === 'string') {
    for (var i = 0, l = styleSheet.rules.length; i < l; i++) {
      if(styleSheet.rules[i].selectorText && styleSheet.rules[i].selectorText.toLowerCase()==selector.toLowerCase()) {
        styleSheet.rules[i].style.cssText = style;
        return;
      }
    }
    styleSheet.addRule(selector,style);
  }
  else if (mediaType === 'object') {
    var styleSheetLength = (styleSheet.cssRules) ? styleSheet.cssRules.length : 0;
    for (var i = 0; i < styleSheetLength; i++) {
      if (styleSheet.cssRules[i].selectorText && styleSheet.cssRules[i].selectorText.toLowerCase() == selector.toLowerCase()) {
        styleSheet.cssRules[i].style.cssText = style;
        return;
      }
    }
    styleSheet.insertRule(selector + '{' + style + '}', styleSheetLength);
  }
}

createCSSSelector('.mycssclass', 'display:none');
