---
hide:
  - toc
title: hotio/qbittorrent
---

--8<-- "includes/header-links.md"

!!! warning "Don't be stupid!"

    Don't be stupid like this guy from [apogliaghi.com](https://apogliaghi.com/2025/09/crypto-miner-in-hotio/qbittorrent)! I'm not bundling a cryptominer. If you want to play sysadmin, know what you are doing! It's fairly well known that if you expose qBittorrent (or other software) to the world, that there's a chance you're gonna get pwned. Certainly if you keep running old versions (I'm not gonna bother checking how old his digest sha actually is, EDIT: sha is recent, but in his article no mention about how long or what version he had running in the past). All sourcecode is visible on GitHub and verifiable by anyone. The screenshotted oneliner from discord without any context can also be searched for in my discord server if you wanna read the context. The sad part here is that the incompetent person throwing false accusations around is probably seen by his family as the smart nephew that knows everything about computers. RIP The Family! See this article on [torrentfreak.com](https://torrentfreak.com/qbittorrent-web-ui-exploited-to-mine-cryptocurrency-heres-how-to-fix-230902/) for more info on how you could get pwned. He's not the first one and sadly he's not going to be the last victim, but atleast man up and own your mistake!

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
    </tbody>
  </table>
</div>

<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script type="text/javascript" src="/javascripts/loadJSON-11.js"></script>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name qbittorrent \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \
        -e LIBTORRENT="v1" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbittorrent
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      qbittorrent:
        container_name: qbittorrent
        image: ghcr.io/hotio/qbittorrent
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp
          - LIBTORRENT=v1
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
