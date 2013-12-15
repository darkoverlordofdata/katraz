// Generated by CoffeeScript 1.6.3
(function() {
  var Console, FileSystem, MODE_REPL, MODE_RUN, rte, _ctrlCodes, _data, _fix, _get, _set_title;

  MODE_REPL = 0;

  MODE_RUN = 1;

  _ctrlCodes = {
    82: function() {
      return this.reset();
    }
  };

  _fix = function($text) {
    return $text.replace(/\ /g, "&nbsp;").replace(/\n/g, "<br />");
  };

  _get = function($name, $next) {
    if (localStorage[$name] != null) {
      return $next(localStorage[$name]);
    } else {
      return $next('');
    }
  };

  _set_title = function($filename) {
    var $name;
    $name = $filename.split('/').pop();
    if (/\[.*\]$/.test(document.title)) {
      return document.title.replace(/\[(.*)\]$/, $name);
    } else {
      return document.title += " - [" + $name + "]";
    }
  };

  window.rte = rte = {
    Console: Console = (function() {
      Console.prototype.mode = MODE_REPL;

      Console.prototype.element = '';

      Console.prototype.console = null;

      Console.prototype.buffer = null;

      Console.prototype.vars = null;

      Console.prototype.animateScroll = true;

      Console.prototype.autofocus = true;

      Console.prototype.promptLabel = '';

      Console.prototype.promptAlt = '?';

      Console.prototype.promptHistory = true;

      Console.prototype.welcomeMessage = '';

      function Console(element, prompt) {
        this.element = element != null ? element : '.console';
        this.prompt = prompt != null ? prompt : '> ';
        this.promptLabel = this.prompt;
        this.clear();
      }

      Console.prototype.commandValidate = function($line) {
        if ($line === "") {
          return false;
        } else {
          return true;
        }
      };

      Console.prototype.input = function($prompt, $vars) {
        if ($prompt != null) {
          this.print($prompt);
        }
        this.buffer = [];
        this.vars = $vars;
        return true;
      };

      Console.prototype.pause = function($set) {};

      Console.prototype.reset = function() {
        return this.console.sync();
      };

      Console.prototype.setPrompt = function($prompt) {
        return this.console.setPrompt($prompt);
      };

      Console.prototype.debug = function($text) {
        $text = $text != null ? String($text) : '';
        return this.console.inner.append(_fix("" + $text + "\n"));
      };

      Console.prototype.hilite = function($text) {
        $text = $text != null ? String($text) : '';
        return this.console.inner.append(_fix("" + $text + "\n"));
      };

      Console.prototype.print = function($text) {
        $text = $text != null ? String($text) : '';
        return this.console.inner.append(_fix($text));
      };

      Console.prototype.println = function($text) {
        $text = $text != null ? String($text) : '';
        return this.console.inner.append(_fix("" + $text + "\n"));
      };

      Console.prototype.clear = function() {
        $(this.element).html('');
        this.console = $(this.element).console(this);
        this.console.inner.offset({
          top: 0,
          left: 0
        });
        this.console.inner.width($(document).width() - 12);
        return this.console.inner.height($(document).height() - 12);
      };

      return Console;

    })(),
    FileSystem: FileSystem = (function() {
      var $root;

      function FileSystem() {}

      $root = '/';

      FileSystem.prototype.setRoot = function($path) {
        return $root = $path;
      };

      FileSystem.prototype.readFile = function($filename, $next) {
        if (localStorage[$filename] != null) {
          return _get($filename, function($data) {
            _set_title($filename);
            return $next(null, String($data));
          });
        } else {
          return $.get($root + $filename + '.bas', function($data) {
            _set_title($filename);
            return $next(null, String($data));
          });
        }
      };

      FileSystem.prototype.writeFile = function($filename, $data, $next) {
        localStorage[$filename] = $data;
        return $next(null);
      };

      FileSystem.prototype.deleteFile = function($filename, $next) {
        delete localStorage[$filename];
        return $next(null);
      };

      FileSystem.prototype.readDir = function($dir, $next) {
        var $name, $path, $value;
        return $next(((function() {
          var _ref, _results;
          _ref = _data[$dir];
          _results = [];
          for ($name in _ref) {
            $path = _ref[$name];
            _results.push($name + '.bas');
          }
          return _results;
        })()).concat($dir === 'CATALOG' ? (function() {
          var _results;
          _results = [];
          for ($name in localStorage) {
            $value = localStorage[$name];
            _results.push($name.split('/').pop() + '.bas');
          }
          return _results;
        })() : []));
      };

      return FileSystem;

    })()
  };

  _data = {
    ATARI: {
      SRTRK: 'bas/atari/SRTRK.bas',
      WUMPUS: 'bas/atari/WUMPUS.bas'
    },
    GWBASIC: {
      eliza: 'bas/gwbasic/eliza.bas',
      romulan: 'bas/gwbasic/romulan.bas'
    },
    GROUP: {
      TREK0: 'bas/hp2k/group/TREK0.bas',
      TREK1: 'bas/hp2k/group/TREK1.bas',
      TREK2: 'bas/hp2k/group/TREK2.bas',
      TREK3: 'bas/hp2k/group/TREK3.bas',
      TREK4: 'bas/hp2k/group/TREK4.bas',
      TREK73: 'bas/hp2k/group/TREK73.bas'
    },
    LIBRARY: {
      TRADER: 'bas/hp2k/system/TRADER.bas',
      TRADES: 'bas/hp2k/system/TRADES.bas'
    },
    TEST: {
      data: 'bas/hp2k/test/data.bas',
      def: 'bas/hp2k/test/def.bas',
      dim: 'bas/hp2k/test/dim.bas',
      "for": 'bas/hp2k/test/for.bas',
      gosub: 'bas/hp2k/test/gosub.bas',
      "if": 'bas/hp2k/test/if.bas',
      input: 'bas/hp2k/test/input.bas',
      "let": 'bas/hp2k/test/let.bas',
      numbers: 'bas/hp2k/test/numbers.bas',
      print: 'bas/hp2k/test/print.bas',
      test: 'bas/hp2k/test/test.bas',
      unary: 'bas/hp2k/test/unary.bas'
    },
    CATALOG: {
      OREGON: 'bas/hp2k/OREGON.bas',
      STRTR1: 'bas/hp2k/STRTR1.bas',
      STTR1: 'bas/hp2k/STTR1.bas'
    }
  };

}).call(this);
