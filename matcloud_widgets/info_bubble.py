import ipywidgets as widgets
from traitlets import Unicode

class InfoBubble(widgets.DOMWidget):
    _view_module = Unicode('matcloud_widgets').tag(sync=True)
    _view_name = Unicode('InfoBubbleView').tag(sync=True)
    value = Unicode('Hello World!').tag(sync=True)
    
    def __init__(self, value="", **kwargs):
        self.value = value
        super(InfoBubble, self).__init__(**kwargs)  
        
##EOF