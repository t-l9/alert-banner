(function() {

    //****************************
    // Constructor
    //****************************
    this.Banner = function() {

        // constants
        this.width = 100;
        this.transitionEnd = transitionSelect();

        // default properties
        var defaults = {
            bgColor: '#2ecc71', // green
            content: "Scheduled maintenance will occur shortly.",
            className: "overlook-bar open",
            collapse: false
        };

        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        } else {
            this.options = defaults;
        }

    };

    //****************************
    // Public Methods
    //****************************
    Banner.prototype.open = function() {
        init.call(this);
        eventInit.call(this);
    };

    Banner.prototype.collapse = function() {
        var _ = this;
        this.banner.className = this.banner.className.replace("open", "collapse");

        this.banner.addEventListener(this.transitionEnd, function() {
          _.banner.parentNode.removeChild(_.banner);
        });
    };

    //****************************
    // Private Methods
    //****************************
    function extendDefaults(defaults, args) {
        for (var i in args) {
            if (args.hasOwnProperty(i)) {
                defaults[i] = args[i];
            }
        }
        return defaults;
    }

    function init() {
        var message;
        var container;
        var docFrag;

        message = this.options.content;
        docFrag = document.createDocumentFragment();

        this.banner                       = document.createElement('div');
        this.banner.className             = this.options.className;
        this.banner.style.width           = this.width + "%";
        this.banner.style.backgroundColor = this.options.bgColor;

        this.close = document.createElement('button');
        this.close.className = "collapse";
        this.close.innerHTML = "x";
        this.banner.appendChild(this.close);

        container = document.createElement('div');
        container.className = 'overlook-container';
        container.innerHTML = message;

        this.banner.appendChild(container);
        docFrag.appendChild(this.banner);
        // document.body.appendChild(docFrag);

        document.body.insertBefore(docFrag, document.body.firstChild);
    }

    function eventInit() {
        this.close.addEventListener('click', this.collapse.bind(this));
    }

    function transitionSelect() {
        var el = document.createElement('div');
        if (el.style.WebkitTransition) return 'webkitTransitionEnd';
        if (el.style.OTransition) return 'oTransitionEnd';

        return 'transitionend';
    }

})();
