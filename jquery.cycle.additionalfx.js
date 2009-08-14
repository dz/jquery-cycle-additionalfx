/* usage

$('#slides').cycle({
    fx: 'scrollBothWays'
});

$('#slides').cycle({
    fx: 'scrollBothWaysVertical'
});

*/

$.fn.cycle.transitions.scrollBothWays = function($cont, $slides, opts) {
    $cont.css('overflow','hidden');
    opts.before.push($.fn.cycle.commonReset);
    opts.fxFn = function(curr, next, opts, cb, fwd) {
        var w = $cont.width();
        opts.cssFirst = { left: 0 };
        opts.animIn   = { left: 0 };
        if(fwd){
            opts.cssBefore= { left: w, top: 0 };
            opts.animOut  = { left: 0-w };
        }else{
            opts.cssBefore= { left: -w, top: 0 };
            opts.animOut  = { left: w };
        };
        var $l = $(curr), $n = $(next);
        var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut, animOut = opts.animOut, animIn = opts.animIn;
        $n.css(opts.cssBefore);
        var fn = function() {$n.show();$n.animate(animIn, speedIn, easeIn, cb);};
        $l.animate(animOut, speedOut, easeOut, function() {
            if (opts.cssAfter) $l.css(opts.cssAfter);
            if (!opts.sync) fn();
        });
        if (opts.sync) fn();
    };
};

$.fn.cycle.transitions.scrollBothWaysVertical = function($cont, $slides, opts) {
    $cont.css('overflow','hidden');
    opts.before.push($.fn.cycle.commonReset);
    opts.fxFn = function(curr, next, opts, cb, fwd) {
        var h = $cont.height();
        opts.cssFirst = { top: 0 };
        opts.animIn   = { top: 0 };
        if(fwd){
            opts.cssBefore= { left: 0, top: h };
            opts.animOut  = { top: 0-h };
        }else{
            opts.cssBefore= { top: -h, left: 0 };
            opts.animOut  = { top: h };
        };
        var $l = $(curr), $n = $(next);
        var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut, animOut = opts.animOut, animIn = opts.animIn;
        $n.css(opts.cssBefore);
        var fn = function() {$n.show();$n.animate(animIn, speedIn, easeIn, cb);};
        $l.animate(animOut, speedOut, easeOut, function() {
            if (opts.cssAfter) $l.css(opts.cssAfter);
            if (!opts.sync) fn();
        });
        if (opts.sync) fn();
    };
};
