<noscript>
    <style type="text/css">
        section {
            box-shadow: none !important
        }
        
        @media screen and (min-width: 741px) {
            figure:focus figcaption {
                padding: .1rem .66666rem;
                color: var(--negro);
            }
            figure:focus figcaption:before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: var(--blanco);
                color: var(--negro);
                text-shadow: none;
                filter: alpha(opacity=80);
                -moz-opacity: .8;
                opacity: .8;
                z-index: -1;
            }
            figure:focus,
            picture:focus {
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                padding: 0 !important;
                width: 100% !important;
                height: 100% !important;
                margin: auto !important;
                background-color: rgba(51, 51, 51, .8) !important;
                filter: alpha(opacity=100) !important;
                -moz-opacity: 1 !important;
                opacity: 1 !important;
                z-index: 10000 !important;
                outline: 0 !important;
                overflow: none !important;
                border: none !important;
            }
            figure:focus:before,
            picture:focus:before {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                content: "";
                padding: .5em;
                z-index: 10;
                color: var(--claro);
            }
            figure:focus div,
            picture:focus div {
                display: none;
                visibility: hidden
            }
            figure:focus img:last-child,
            picture:focus img:last-child {
                position: relative;
                float: left;
                text-align: center;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                margin: 2.5% !important;
                width: 95% !important;
                height: 95% !important;
                object-fit: contain !important;
                object-position: center center !important;
            }
            figure:focus figcaption,
            picture:focus figcaption {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
            }
            figure:focus:after,
            picture:focus:after {
                width: 0;
                height: 0;
            }
         }
    </style>
</noscript>