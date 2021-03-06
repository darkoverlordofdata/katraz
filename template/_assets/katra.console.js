// Generated by CoffeeScript 1.6.3
(function() {
  (function($, window, document) {
    var Console;
    $.prototype.console = function($options) {
      var _ref;
      if ($options == null) {
        $options = {};
      }
      return (_ref = $.data(this, 'console')) != null ? _ref : $.data(this, 'console', new Console(this, $options));
    };
    return Console = (function() {
      var KEY_BS, KEY_C, KEY_CR, KEY_DOWN, KEY_ESC, KEY_R, KEY_TAB, KEY_UP, colors, fix;

      KEY_BS = 8;

      KEY_TAB = 9;

      KEY_CR = 13;

      KEY_ESC = 27;

      KEY_UP = 38;

      KEY_DOWN = 40;

      KEY_C = 67;

      KEY_R = 82;

      colors = require('colors');

      fix = function($text) {
        return $text.replace(/\ /g, "&nbsp;").replace(/\n/g, "<br />");
      };

      Console.prototype.histpos = 0;

      Console.prototype.history = null;

      Console.prototype.input = null;

      Console.prototype.output = null;

      Console.prototype.prompt = null;

      Console.prototype.mode = 0;

      Console.prototype.options = null;

      Console.prototype["default"] = {
        autofocus: true,
        history: true,
        title: '',
        prompt: '>',
        promptAlt: '?',
        commandHandle: function() {},
        cancelHandle: function() {}
      };

      function Console($container, $options) {
        var _this = this;
        this.history = [];
        this.options = $.extend(this["default"], $options);
        $container.html("<span class=\"output\"></span>\n<span class=\"prompt\"></span><input class=\"input\"></input>");
        this.output = $container.find('.output');
        this.prompt = $container.find('.prompt');
        this.input = $container.find('.input');
        if (this.options.autofocus) {
          this.input.focus();
        }
        this.prompt.text(this.options.prompt);
        $(window).on('click', function($e) {
          return _this.input.focus();
        });
        $(document.body).on('keydown', function($e) {
          if ($e.keyCode === KEY_ESC) {
            $e.stopPropagation();
            return $e.preventDefault();
          }
        });
        this.input.on('click', function($e) {
          return $e.target.value = $e.target.value;
        });
        this.input.on('keyup', function($e) {
          var $input, $temp;
          if (!_this.options.history) {
            return;
          }
          $input = $e.target;
          $temp = 0;
          if (_this.history.length) {
            if ($e.keyCode === KEY_UP || $e.keyCode === KEY_DOWN) {
              if (_this.history[_this.histpos]) {
                _this.history[_this.histpos] = $input.value;
              } else {
                $temp = _this.input.value;
              }
            }
            if ($e.keyCode === KEY_UP) {
              _this.histpos--;
              if (_this.histpos < 0) {
                _this.histpos = 0;
              }
            } else if ($e.keyCode === KEY_DOWN) {
              _this.histpos++;
              if (_this.histpos > _this.history.length) {
                _this.histpos = _this.history.length;
              }
            }
            if ($e.keyCode === KEY_UP || $e.keyCode === KEY_DOWN) {
              $input.value = _this.history[_this.histpos] ? _this.history[_this.histpos] : $temp;
              return $input.value = $input.value;
            }
          }
        });
        this.input.on('keydown', function($e) {
          if ($e.ctrlKey || $e.metaKey) {
            switch ($e.keyCode) {
              case KEY_C:
                _this.options.cancelHandle();
                $e.preventDefault();
                return $e.stopPropagation();
              case KEY_R:
                _this.clear();
                $e.preventDefault();
                return $e.stopPropagation();
            }
          }
        });
        this.input.on('keydown', function($e) {
          var $input, $prompt;
          $input = $e.target;
          switch ($e.keyCode) {
            case KEY_BS:
              if (!$input.value) {

              }
              break;
            case KEY_TAB:
              return $e.preventDefault;
            case KEY_CR:
              if ($input.value) {
                _this.history[_this.history.length] = $input.value;
                _this.histpos = _this.history.length;
              }
              $prompt = _this.mode ? _this.options.promptAlt : _this.options.prompt;
              _this.output.append("" + $prompt + $input.value + "<br />");
              $input.scrollIntoView();
              if ($input.value && $input.value.trim()) {
                _this.options.commandHandle($input.value);
              }
              return $input.value = '';
          }
        });
      }

      Console.prototype.clear = function() {
        this.output.html('');
        if (this.options.title) {
          return this.println(this.options.title);
        }
      };

      Console.prototype.setPrompt = function($prompt) {
        if ($prompt == null) {
          $prompt = false;
        }
        this.prompt.text($prompt ? this.options.promptAlt : this.options.prompt);
        return this.mode = $prompt;
      };

      Console.prototype.print = function($text) {
        if ($text == null) {
          $text = '';
        }
        this.output.append(fix($text));
        return this.input.get(0).scrollIntoView();
      };

      Console.prototype.println = function($text) {
        if ($text == null) {
          $text = '';
        }
        this.output.append(fix("" + $text + "\n"));
        return this.input.get(0).scrollIntoView();
      };

      Console.prototype.debug = function($text) {
        this.output.append(fix("" + $text + "\n").blue);
        return this.input.get(0).scrollIntoView();
      };

      Console.prototype.hilite = function($text) {
        this.output.append(fix("" + $text + "\n").yellow);
        return this.input.get(0).scrollIntoView();
      };

      return Console;

    })();
  })(jQuery, window, document);

}).call(this);
