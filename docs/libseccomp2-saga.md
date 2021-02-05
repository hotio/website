Hello there!

So somebody linked you this page or you found it by either pure luck or intense Google magic? Good! What is all this `libseccomp2` mumbo jumbo about?

If you are running `Raspbian/Raspberry Pi OS` (key part here, it being arm 32-bit), your docker container all of a sudden stops working and you appear to be the only person in the world to have this happen... Rest assured you are not alone. The issue here is that you are probably running an outdated version of libseccomp2. The symptom can vary in many ways depending on the app.

Radarr for example does nothing (no error or anything), Mylar3 gives this `Fatal Python error: pyinit_main: can't initialize time`, Overseerr gives you `Fatal error in , line 0`, `docker exec <container-name> date` returns 1970 and the list goes on.

The fastest way to detect if that is indeed your issue is by running the container in `--privileged` mode (I understand that you are not comfortable with this, and you should avoid running privileged at all costs), if it works after doing this, you now know you're a victim too. If you really don't like doing this, doing `docker exec <container-name> date` might confirm it too if you are 100% sure your system date is working as expected.

Several solutions:

1. Upgrade your OS to Ubuntu 20.04 **arm64** image (found [here](https://ubuntu.com/download/raspberry-pi)).
2. Manually update libseccomp2 (found [here](http://ftp.us.debian.org/debian/pool/main/libs/libseccomp/)).

    ```shell
    wget http://ftp.us.debian.org/debian/pool/main/libs/libseccomp/libseccomp2_2.5.1-1_armhf.deb
    sudo dpkg -i libseccomp2_2.5.1-1_armhf.deb
    ```

3. Keep running with `--privileged`, not recommended though.

The prefered way here is going with Ubuntu + ARM64 if you can.

!!! info
    Make sure you are running the latest [Docker Engine](https://docs.docker.com/engine/install/).
