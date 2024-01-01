/**
 * Information reel
 *
 * @package 	Information reel
 * @subpackage 	Information reel
 * @version   	3.3
 * @author    	Gopi Ramasamy
 * @copyright 	Copyright (C) 2010 - 2014 www.gopiplus.com, LLC
 * @license   	http://www.gnu.org/licenses/gpl-2.0.html GNU/GPLv2 only
 *
 * http://www.gopiplus.com/extensions/2011/09/information-reel-joomla-module/
 * 
 */


function saecrsinforeel_scroll() {
    saeinforeel_obj.scrollTop = saeinforeel_obj.scrollTop + 1;
    saeinforeel_scrollPos++;
    if ((saeinforeel_scrollPos % saeinforeel_heightOfElm) == 0) {
        saeinforeel_numScrolls--;
        if (saeinforeel_numScrolls == 0) {
            saeinforeel_obj.scrollTop = '0';
            saecrsinforeel_content();
        } else {
            if (saeinforeel_scrollOn == 'true') {
                saecrsinforeel_content();
            }
        }
    } else {
        setTimeout("saecrsinforeel_scroll();", 10);
    }
}
var saeinforeel_Num = 0;

function saecrsinforeel_content() {
    var tmp_vsrp = '';

    w_vsrp = saeinforeel_Num - parseInt(saeinforeel_numberOfElm);
    if (w_vsrp < 0) {
        w_vsrp = 0;
    } else {
        w_vsrp = w_vsrp % saeinforeel_array.length;
    }

    // Show amount of vsrru
    var elementsTmp_vsrp = parseInt(saeinforeel_numberOfElm) + 1;
    for (i_vsrp = 0; i_vsrp < elementsTmp_vsrp; i_vsrp++) {

        tmp_vsrp += saeinforeel_array[w_vsrp % saeinforeel_array.length];
        w_vsrp++;
    }

    saeinforeel_obj.innerHTML = tmp_vsrp;

    saeinforeel_Num = w_vsrp;
    saeinforeel_numScrolls = saeinforeel_array.length;
    saeinforeel_obj.scrollTop = '0';
    // start scrolling
    setTimeout("saecrsinforeel_scroll();", 2000);
}