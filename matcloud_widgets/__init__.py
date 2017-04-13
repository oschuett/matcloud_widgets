# -*- coding: utf-8 -*-

from .info_bubble import InfoBubble

# Jupyter Extension points
def _jupyter_nbextension_paths():
    return [dict(section="notebook", src="./static", dest="matcloud_widgets", require="matcloud_widgets/main")]
    
#EOF