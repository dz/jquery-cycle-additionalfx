Additional transitions for jQuery Cycle
=======================================

One of the drawbacks of the `jQuery Cycle`_ plugin is that it only allows you to specify one transition for all actions, rather than allowing the specification of different transitions for different actions [1]_.

This file makes two additional transitions available for jQuery Cycle: **scrollBothWays** and **scrollBothWaysVertical**.  Unlike the built-in scrolling transitions, these will change the direction of scrolling depending on the action.

Usage
=====

Include the js file **after** the ``jquery.cycle.js`` file::

    <script src="/js/jquery.cycle.js" type="text/javascript"></script>
    <script src="/js/jquery.cycle.additionalfx.js" type="text/javascript"></script>

Then, simply use the name of the new transition::

    $('#slides').cycle({
        fx: 'scrollBothWays'
    });

Or::

    $('#slides').cycle({
        fx: 'scrollBothWaysVertical'
    });
    

.. _jQuery Cycle: http://malsup.com/jquery/cycle/

.. [1] Such as using scroll left for "next" and scroll right for "previous"