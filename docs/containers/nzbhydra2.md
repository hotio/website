---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag982" onclick="CopyToClipboard('tag982');return false;" class="tag-decoration">release</div><div id="tag11362" onclick="CopyToClipboard('tag11362');return false;" class="tag-decoration">release-086edf0</div><div id="tag29501" onclick="CopyToClipboard('tag29501');return false;" class="tag-decoration">release-9.0.6</div><div id="tag25703" onclick="CopyToClipboard('tag25703');return false;" class="tag-decoration">release-v9</div><div id="tag988" onclick="CopyToClipboard('tag988');return false;" class="tag-decoration">release-v9.0</div><div id="tag6500" onclick="CopyToClipboard('tag6500');return false;" class="tag-decoration">release-v9.0.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/086edf01c68598179e4e7eb1a7efdea1d81ef547" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36262101779" target="_blank">2026-09-26 18:18:55</a></td></tr>
<tr><td><div id="tag26182" onclick="CopyToClipboard('tag26182');return false;" class="tag-decoration">testing</div><div id="tag7121" onclick="CopyToClipboard('tag7121');return false;" class="tag-decoration">testing-4130b60</div><div id="tag22480" onclick="CopyToClipboard('tag22480');return false;" class="tag-decoration">testing-9.0.5</div><div id="tag26859" onclick="CopyToClipboard('tag26859');return false;" class="tag-decoration">testing-v9</div><div id="tag8559" onclick="CopyToClipboard('tag8559');return false;" class="tag-decoration">testing-v9.0</div><div id="tag2316" onclick="CopyToClipboard('tag2316');return false;" class="tag-decoration">testing-v9.0.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/4130b609eec2c9b98df4d7a831c009b7768e6aa7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/36064687321" target="_blank">2026-09-24 21:57:52</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
