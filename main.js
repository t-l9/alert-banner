(function() {

    //****************************
    // Constructor
    //****************************
    this.Banner = function() {

        // constants
        this.width = 100;
        this.height = 50;

        // default properties
        var defaults = {
            bgColor: '#2ecc71', // green
            fontColor: '#ffffff',
            content: "",
            className: "overlook-bar",
            collapse: false
        }

        if (arguments[0] && typeof arguments[0] === "object") {
            this.options = extendDefaults(defaults, arguments[0]);
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
        this.banner.style.height          = this.options.height + "px";
        this.banner.style.width           = this.options.width + "px";
        this.banner.style.backgroundColor = this.options.bgColor;

        container = document.createElement('div');
        container.className = 'overlook-container';
        container.innerHTML = message;

        this.banner.appendChild(container)
        docFrag.appendChild(this.banner);
        document.body.appendChild(docFrag);


    }


})();
