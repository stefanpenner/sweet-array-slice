let var = macro {
  rule { $args = arraySlice($arguments); } => {
    var length = $arguments.length;
    var $args = new Array(length);
    for (var i = 0; i < length; i++) {
      $args[i] = $arguments[i];
    }
  }

  rule { $args = arraySlice($arguments, $start); } => {
    var length = $arguments.length;
    var start = Math.min($start, length - 1);
    var $args = new Array(length - start);
    for (var i = start; i < length; i++) {
      $args[i] = $arguments[i];
    }
  }

  rule { $args = arraySlice($arguments, $start, $end); } => {
    var length = $arguments.length;
    var start = Math.min($start, length - 1);
    var end = Math.min($end, length);
    var $args = new Array(end - start);
    for (var i = start; i < end; i++) {
      $args[i] = $arguments[i];
    }
  }

  rule { } => { var }
}

export var;
