# Alessio Modonesi 5F
# > sudo py index.py

import subprocess
import keyboard

p = subprocess.Popen(['php', 'app/view/cli/index.php'])

while True:
    if keyboard.is_pressed('esc'):
        p.kill()
        break
