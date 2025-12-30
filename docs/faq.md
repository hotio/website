---
hide:
  - navigation
---

<div class="pullio-banner"><img src="/img/pullio-stick-out-tongue.svg" alt="pullio"/><div class="pullio-banner-text">I'm here if you need me...</div></div>

## Troubleshooting

??? question "Someone asked you for a 'docker-compose' snippet...How do you give them that?"

    If you are not using `docker-compose`, that can sound like a daunting task. Have no fear though, the following cli command spits it out.

    ```shell linenums="1"
    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock:ro ghcr.io/red5d/docker-autocompose <container-name-or-id> [<additional-names-or-ids>]
    ```

    Now you should upload this to [logs.notifiarr.com](https://logs.notifiarr.com){: target=_blank rel="noopener" } after removing personal details and passwords.

## Installation

??? question "Installing Docker, how and where?"

    I'd have a look at the official [Docker Engine](https://docs.docker.com/engine/install/){: target=_blank rel="noopener" } installation instructions.

## Guides

??? question "I would like to execute my own scripts on startup, how would I do this?"

    This will only work for containers using `s6 overlay`, recognisable by `ENVIRONMENT` printed at the top of the log when the container starts.

    If you have a need to do additional stuff when the container starts or stops, you can mount your script with the volume `/docker/host/my-script.sh:/etc/cont-init.d/99-my-script` to execute your script on container start or `/docker/host/my-script.sh:/etc/cont-finish.d/99-my-script` to execute it when the container stops. An example script can be seen below.

    ```shell linenums="1"
    #!/command/with-contenv bash
    echo "Hello, this is me, your script."
    ```

??? question "How can I get a static IP for one of my containers using 'docker-compose'?"

    Here's a basic docker-compose example that sets up a custom network and gives the plex container a static IP.

    ```yaml linenums="1"
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

    ```yaml linenums="1"
    version: "3.7"

    services:
      qbittorrent:
        hostname: qbittorrent.internal 
        container_name: qbittorrent
        image: hotio/qbittorrent
        ports:
          - "8080:8080"
          - "9117:9117"
        environment:
          ...
          - VPN_EXPOSE_PORTS_ON_LAN=9117/tcp
        ...

      jackett:
        container_name: jackett
        image: hotio/jackett
        network_mode: "service:qbittorrent"
        ...
    ```

??? question "Got any Docker guides?"

    Take a look [here](https://wiki.servarr.com/Docker_Guide){: target=_blank rel="noopener" } for an extensive guide on best practises from the *arr team.

??? question "But, but, how do I configure all this stuff?"

    Maybe TRaSH from [TRaSH Guides](https://trash-guides.info){: target=_blank rel="noopener" } can help...
