
/*--------------------------------------------
--	Simple theme Menu Accordeon CK			--
--	This is a simple theme with annotations	--
--	you can fill it like you want			--
--	to put your own CSS						--
--------------------------------------------*/

/* main UL container */
ul#accordeonck417 {
    padding: 5px;
    margin: 0;
}

/* style for all links */
ul#accordeonck417 li {
    border-bottom: 1px solid #ddd;
    margin: 0;
    text-align: left;
    list-style: none;
    color: #666;
	background: none;
}

/* style for all links from the second level */
ul#accordeonck417 li ul li {
    list-style-type : square;
    margin: 0 0 0 20px;
	border-bottom: none;
	border-top: 1px solid #ddd;
}

/* style for all anchors */
ul#accordeonck417 li a {
    margin: 0;
    color: #555;
    text-align: left;
    display: block;
    padding-bottom: 7px;
    padding-left: 15px;
    padding-right: 4px;
    padding-top: 7px;
    text-decoration: none;
	background: none;
}

/* style for all anchors on mouseover */
ul#accordeonck417 li a:hover, ul#accordeonck417 ul li a:focus {
    color: #000;
}

/* style for all link descriptions */
ul#accordeonck417 li a span.accordeonckdesc {
	display: block;
}