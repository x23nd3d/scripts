import time
import pexpect
import os


print('[+] Executing Terminal 2...')
time.sleep(0.5)
os.system("tilix --action session-add-right --focus-window -x python3 ssh-client.py")
print('[+] Executing Terminal 3...')
time.sleep(0.5)
print('[+] Connecting to the Main Server...')
time.sleep(0.5)
server = pexpect.spawn('ssh andrew@IP')
server.expect("andrew@IP's password:")
server.sendline('password')
# server.sendline("sudo -s")
# server.expect("password for andrew: ")
# server.sendline('password')
print('[+] Connected to the Main Server.')
time.sleep(0.5)
print("[+] Opening the Developer's server directory...")
server.sendline('cd store')
time.sleep(0.5)
print("[+] Running the Developer's server...")
server.sendline('npm run server')
time.sleep(0.5)
print("[+] Successfully connected. Server is working [...] >")
time.sleep(0.5)
print('[+] Opening working directory...')
time.sleep(0.5)
print('[+] Opened. Working')
os.system("tilix --action session-add-down --focus-window -x")
server.interact()







