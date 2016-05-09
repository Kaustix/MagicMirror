# MagicMirror
Raspberry Pi Magic Mirror Code + Setup

## What you need
- Raspberry Pi (I used Raspberry Pi 1 Model B)
- Edimax EW-7811Un Wifi Adapter
- 10" TFT LCD Display + Video Driver
- 8GB SD Card
- Two-Way Mirror

## Setup

1) Download and Install Raspbian on your Pi using [NOOBS](https://www.raspberrypi.org/downloads/noobs/)

2) Configure Edimax wifi adapter, setup instruction [here](https://www.andreagrandi.it/2014/09/02/how-to-configure-edimax-ew-7811un-wifi-dongle-on-raspbian/)

3) Download KWeb (Kiosk Browser)

First install the package

```
wget http://steinerdatenbank.de/software/kweb-1.7.1.tar.gz
tar -xzf kweb-1.7.1.tar.gz
cd kweb-1.7.1
./debinstall
```

Once installed, we need to configure kweb to launch in kiosk mode

Go to 'Configuration' and Enable the following settings:

- Enable Javascript
- Use Left ALT in Kiosk Mode
- Run In Kiosk Mode
- Set URL For Start page to the MagicMirror .html path:  `file://home/pi/pi/MagicMirror/index.html`

4) Download Unclutter (Hides your mouse pointer when inactive)

`sudo apt-get install unclutter`

5) Launch KWeb and Unclutter on startup and disable screensaver

Edit the file: ~/.config/lxsession/LXDE-pi/autostart

Add the following lines:

```
@lxpanel --profile LXDE-pi
@pcmanfm --desktop --profile LXDE-pi
@xset s off
@xset -dpms
@xset s noblank
@kweb
@unclutter
```

6) Update TimeZone (optional if your time was not set correctly, like mine was)

run `dpkg-reconfigure tzdata`



