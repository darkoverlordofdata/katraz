// Generated by CoffeeScript 1.6.3
(function() {
  PR.registerLangHandler(PR.createSimpleLexer([[PR.PR_STRING, /^(?:"(?:[^\\"\r\n]|\\.)*(?:"|$))/, null, '"'], [PR.PR_PLAIN, /^\s+/, null, ' \r\n\t\xA0']], [[PR.PR_COMMENT, /^REM[^\r\n]*/, null], [PR.PR_KEYWORD, /^\b(?:ABS|ATN|COS|EXP|INT|LEN|LIN|LOG|RND|SGN|SIN|SPA|SQR|TAB|TAN|TIM|LCASE|LEFT|MID|RIGHT|SUBSTR|UCASE|ZER|CONS|AND|BASE|CHAIN|CLS|COM|DATA|DEF|FN[A-Z]|DIM|END|ENTER|FOR|GOSUB|GOTO|IF|IMAGE|INPUT|LET|MAT|NEXT|NOT|ON|OR|PRINT|RANDOMIZE|READ|RESTORE|RETURN|STEP|STOP|THEN|TO|USING)\b/i, null], [PR.PR_PLAIN, /^[A-Z][A-Z0-9]?(?:\$|%)?/i, null], [PR.PR_LITERAL, /^(?:\d+(?:\.\d*)?|\.\d+)(?:e[+\-]?\d+)?/i, null, '0123456789'], [PR.PR_PUNCTUATION, /^.[^\s\w\.$%"]*/, null]]), ['katra']);

}).call(this);
