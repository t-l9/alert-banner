(function() {

    //****************************
    // Constructor
    //****************************
    this.Banner = function() {

        // constants
        this.width = 100;
        this.height = 65;

        // default properties
        var defaults = {
            bgColor: '#2ecc71', // green
            content: "Scheduled maintenance will occur shortly.",
            className: "overlook-bar",
            font: "HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",
            fontColor: '#ffffff',
            collapse: false
        }

        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
        } else {
            this.options = defaults;
        }

    }


    //****************************
    // Public Methods
    //****************************
    Banner.prototype.open = function() {
        builder.call(this);
    }

    Banner.prototype.collapse = function() {

    }

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

    function builder() {
        var message;
        var container;
        var docFrag;


        message = this.options.content;
        docFrag = document.createDocumentFragment();

        this.banner                       = document.createElement('div');
        this.banner.className             = this.options.className;
        this.banner.style.height          = this.height + "px";
        this.banner.style.width           = this.width + "%";
        this.banner.style.fontFamily      = this.options.font;
        this.banner.style.color           = this.options.fontColor;
        this.banner.style.backgroundColor = this.options.bgColor;

        container = document.createElement('div');
        container.className = 'overlook-container';
        container.innerHTML = message;

        this.banner.appendChild(container)
        docFrag.appendChild(this.banner);
        document.body.appendChild(docFrag);


    }


})();
