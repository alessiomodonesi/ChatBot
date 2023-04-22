import subprocess
import keyboard

while True:
    p = subprocess.Popen(['php', 'index.php'], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    keyboard.wait('esc')
    p.kill()