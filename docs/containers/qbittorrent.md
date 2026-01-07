---
hide:
  - toc
title: hotio/qbittorrent
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbittorrent){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbittorrent){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/qbittorrent/qbittorrent){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag26691" onclick="CopyToClipboard('tag26691');return false;" class="tag-decoration">legacy</div><div id="tag19202" onclick="CopyToClipboard('tag19202');return false;" class="tag-decoration">legacy-4.3.9</div><div id="tag14294" onclick="CopyToClipboard('tag14294');return false;" class="tag-decoration">legacy-cf3f31d</div><div id="tag23756" onclick="CopyToClipboard('tag23756');return false;" class="tag-decoration">legacy-v4</div><div id="tag4095" onclick="CopyToClipboard('tag4095');return false;" class="tag-decoration">legacy-v4.3</div><div id="tag28136" onclick="CopyToClipboard('tag28136');return false;" class="tag-decoration">legacy-v4.3.9</div></td><td>Fixed to v4.3.9</td><td><a href="https://github.com/hotio/qbittorrent/commit/cf3f31d2e89895ef27dc8d6c7543dd54efd64e46" target="_blank">Upstream image update</a></td><td><a href="https://github.com/hotio/qbittorrent/actions/runs/20770104015" target="_blank">2026-01-07 03:57:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23293" onclick="CopyToClipboard('tag23293');return false;" class="tag-decoration">release</div><div id="tag13297" onclick="CopyToClipboard('tag13297');return false;" class="tag-decoration">release-5.1.4</div><div id="tag18687" onclick="CopyToClipboard('tag18687');return false;" class="tag-decoration">release-8db4658</div><div id="tag5957" onclick="CopyToClipboard('tag5957');return false;" class="tag-decoration">release-v5</div><div id="tag32256" onclick="CopyToClipboard('tag32256');return false;" class="tag-decoration">release-v5.1</div><div id="tag10200" onclick="CopyToClipboard('tag10200');return false;" class="tag-decoration">release-v5.1.4</div></td><td>Releases</td><td>Upstream image update</td><td><a href="https://github.com/hotio/qbittorrent/actions/runs/20690833038" target="_blank">2026-01-04 09:26:31</a></td></tr>
</tbody>
  </table>
</div>

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
