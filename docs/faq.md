---
hide:
  - navigation
---

<div class="pullio-banner"><img src="/img/pullio-stick-out-tongue.svg" alt="pullio"/><div class="pullio-banner-text">I'm here if you need me...</div></div>

## Troubleshooting

??? question "Someone asked you for a 'docker-compose' snippet...How do you give them that?"

    If you are not using `docker-compose` that can sound like a daunting task. Have no fear though, the following cli command spits it out.

    ```shell
    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock:ro ghcr.io/red5d/docker-autocompose <container-name-or-id> [<additional-names-or-ids>]
    ```

    Now you should upload this to something like [hastebin.com](https://hastebin.com){: target=_blank rel="noopener noreferrer" }, [pastebin.com](https://pastebin.com){: target=_blank rel="noopener noreferrer" }, [github.com](https://gist.github.com/){: target=_blank rel="noopener noreferrer" } or any other site that provides easy sharing of text files.

    If you are sure that there's no personal information to be seen, you can also use the command below and provide them the link.

    ```shell
    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock:ro ghcr.io/red5d/docker-autocompose <container-name-or-id> [<additional-names-or-ids>] | curl -H "x-uuid;" --upload-file - 'https://paste.c-net.org/'
    ```

??? question "What is this libseccomp2 thing I keep hearing about? Am I affected by it?"

    If you are running `Raspbian/Raspberry Pi OS` (key part here, it being arm 32-bit), your docker container all of a sudden stops working and you appear to be the only person in the world to have this happen... Rest assured you are not alone. The issue here is that you are probably running an outdated version of libseccomp2. The symptom can vary in many ways depending on the app.

    Radarr for example does nothing (no error or anything), Mylar3 gives this `Fatal Python error: pyinit_main: can't initialize time`, Overseerr gives you `Fatal error in , line 0`, `docker exec <container-name> date` returns 1970 and the list goes on.

    The fastest way to detect if that is indeed your issue is by running the container in `--privileged` mode (I understand that you are not comfortable with this, and you should avoid running privileged at all costs), if it works after doing this, you now know you're a victim too. If you really don't like doing this, doing `docker exec <container-name> date` might confirm it too if you are 100% sure your system date is working as expected.

    Several solutions:

    1. Upgrade your OS to Ubuntu 20.04 **arm64** image (found [here](https://ubuntu.com/download/raspberry-pi){: target=_blank rel="noopener noreferrer" }).
    2. Manually update libseccomp2 (found [here](http://ftp.us.debian.org/debian/pool/main/libs/libseccomp/){: target=_blank rel="noopener noreferrer" }).

        ```shell
        wget http://ftp.us.debian.org/debian/pool/main/libs/libseccomp/libseccomp2_2.5.1-1_armhf.deb
        sudo dpkg -i libseccomp2_2.5.1-1_armhf.deb
        ```

    3. Keep running with `--privileged`, not recommended though.

    The prefered way here is going with Ubuntu + ARM64 if you can.

    !!! info
        Make sure you are running the latest [Docker Engine](https://docs.docker.com/engine/install/){: target=_blank rel="noopener noreferrer" }.

## Installation

??? question "How do I install 'docker-compose' on my machine?"

    There's all sorts of ways to do this, here we are going to pick the easy way. The following commands will download and install a wrapper script that uses the docker image `linuxserver/docker-compose`.

    ```shell
    sudo curl -fsSL https://raw.githubusercontent.com/linuxserver/docker-docker-compose/master/run.sh > /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    ```

    Now you should be able to do `docker-compose --version` as if it were natively installed. This script doesn't pull for the latest image though everytime it runs, so it might be a good idea to once in a while purge the image. It'll then pull a new one the next time it runs.

??? question "Installing Docker, how and where?"

    I'd have a look at the official [Docker Engine](https://docs.docker.com/engine/install/){: target=_blank rel="noopener noreferrer" } installation instructions.

## Guides

??? question "I would like to execute my own scripts on startup, how would I do this?"

    This will only work for containers using `s6 overlay`, recognisable by `ENVIRONMENT` printed at the top of the log when the container starts.

    If you have a need to do additional stuff when the container starts or stops, you can mount your script with the volume `/docker/host/my-script.sh:/etc/cont-init.d/99-my-script` to execute your script on container start or `/docker/host/my-script.sh:/etc/cont-finish.d/99-my-script` to execute it when the container stops. An example script can be seen below.

    ```shell linenums="1"
    #!/command/with-contenv bash

    echo "Hello, this is me, your script."
    ```

??? question "How do I use this 'docker-compose' to start all my apps?"

    First you'll need to create a file called `docker-compose.yml` in a location that you like, adjust below example to your liking.

    ```shell
    cd ~/
    mkdir ./compose
    nano ./compose/docker-compose.yml
    ```

    Now you can copy/paste your services into this file. See example below. Don't forget to adjust or add more volumes and set the environment variables according to your situation.

    ```text
    version: "3.7"

      services:
        cloudflareddns:
          container_name: cloudflareddns
          image: hotio/cloudflareddns
          environment:
            - PUID=1000
            - PGID=1000
            - UMASK=002
            - TZ=Etc/UTC
            - INTERVAL=300
            - DETECTION_MODE=dig-whoami.cloudflare
            - LOG_LEVEL=3
            - cloudflareddns
            - CF_USER=your.cf.email@example.com
            - CF_APIKEY=your.global.apikey
            - CF_APITOKEN
            - CF_APITOKEN_ZONE
            - CF_HOSTS=test.example.com;test.foobar.com;test2.foobar.com
            - CF_ZONES=example.com;foobar.com;foobar.com
            - CF_RECORDTYPES=A;A;AAAA
          volumes:
            - /<host_folder_config>:/config
          restart: unless-stopped

        qflood:
          container_name: qflood
          image: hotio/qflood
          ports:
            - "8080:8080"
            - "3000:3000"
          environment:
            - PUID=1000
            - PGID=1000
            - UMASK=002
            - TZ=Etc/UTC
            - FLOOD_AUTH=false
          volumes:
            - /<host_folder_config>:/config
          restart: unless-stopped
    ```

    If we now do `cd ~/compose`, followed by `docker-compose up -d` all our containers should start. To bring everything down, you can do `docker-compose down`. If we want to update them, we do `docker-compose pull` followed by `docker-compose up -d`. When making adjustments to our `docker-compose.yml` file, we do `docker-compose up -d` and all containers that had modifications will be recreated.

??? question "How can I get a static IP for one of my containers using 'docker-compose'?"

    Here's a basic docker-compose example that sets up a custom network and gives the plex container a static IP.

    ```text
    version: "3.7"

    networks:
      my-custom-network:
        name: my-custom-network
        driver: bridge
        ipam:
          driver: default
          config:
            - subnet: 10.1.0.0/24

    services:
      plex:
        container_name: plex
        image: hotio/plex
        ports:
          - "32400:32400"
        networks:
          my-custom-network:
            ipv4_address: 10.1.0.100
        ...

      radarr:
        container_name: radarr
        image: hotio/radarr
        ports:
          - "7878:7878"
        networks:
          - my-custom-network
        ...
    ```

??? question "How do I route a container's traffic through a VPN container?"

    Small docker-compose example below. Notice the `...`, this isn't a copy/paste ready to go example.

    ```text
    version: "3.7"

    services:
      qbittorrent:
        container_name: qbittorrent
        image: hotio/qbittorrent
        ports:
          - "8080:8080"
          - "9117:9117"
        environment:
          ...
          - VPN_ADDITIONAL_PORTS=9117/tcp,9117/udp
        ...

      jackett:
        container_name: jackett
        image: hotio/jackett
        network_mode: "service:qbittorrent"
        ...
    ```

??? question "Got any Docker guides?"

    Take a look [here](https://wiki.servarr.com/Docker_Guide){: target=_blank rel="noopener noreferrer" } for an extensive guide on best practises from the *arr team.

??? question "But, but, how do I configure all this stuff?"

    Maybe TRaSH from [TRaSH Guides](https://trash-guides.info){: target=_blank rel="noopener noreferrer" } can help...
