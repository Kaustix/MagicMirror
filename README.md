# MagicMirror
Raspberry Pi Magic Mirror Code + Setup

## What you need
- Raspberry Pi (I used Raspberry Pi 1 Model B)
- Edimax EW-7811Un Wifi Adapter
- 10" TFT LCD Display + Video Driver
- Two-Way Mirror

## Setup

1. Download and Install Raspbian on your Pi using [NOOBS](https://www.raspberrypi.org/downloads/noobs/)

2. Configure Edimax wifi adapter, setup instruction [here](https://www.andreagrandi.it/2014/09/02/how-to-configure-edimax-ew-7811un-wifi-dongle-on-raspbian/)

3. Download KWeb (Kiosk Browser)

  1. Download/Install

```
wget http://steinerdatenbank.de/software/kweb-1.7.1.tar.gz
tar -xzf kweb-1.7.1.tar.gz
cd kweb-1.7.1
./debinstall
```

  2. Configure

Enable Shortcuts by using the shortcut ALT+a

Go to 'Configuration' and Enable the following settings:

- Enable Javascript
- Use Left-ALT in Kiosk Mode
- Run In Kiosk Mode
- Set URL For Start page to the MagicMirror .html path:  file://home/pi/pi/MagicMirror/index.html

4. Downaload Unclutter (Hides your mouse pointer when inactive)

`sudo apt-get install unclutter`

4. Launch KWeb and Unclutter on startup

Edit the file: /etc/xdg/lxsession/LXDE/autostart

Add these 2 lines

```
@kweb
@unclutter
```



