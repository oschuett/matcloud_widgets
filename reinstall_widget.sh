#!/bin/bash

jupyter nbextension uninstall --sys-prefix --py           matcloud_widgets
jupyter nbextension install   --sys-prefix --py --symlink matcloud_widgets
jupyter nbextension enable    --sys-prefix --py           matcloud_widgets
jupyter nbextension list

#EOF