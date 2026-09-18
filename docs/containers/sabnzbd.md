---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag16402" onclick="CopyToClipboard('tag16402');return false;" class="tag-decoration">nightly</div><div id="tag138" onclick="CopyToClipboard('tag138');return false;" class="tag-decoration">nightly-ac2854a</div><div id="tag18250" onclick="CopyToClipboard('tag18250');return false;" class="tag-decoration">nightly-727f5aeb194b45b663f1d99a2233e9857a2a8913</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/ac2854a1fea2bd54f0ee3a6b5b7cfba60b05461a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35317696736" target="_blank">2026-09-18 07:04:11</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8733" onclick="CopyToClipboard('tag8733');return false;" class="tag-decoration">release</div><div id="tag23466" onclick="CopyToClipboard('tag23466');return false;" class="tag-decoration">release-4ddb3c4</div><div id="tag569" onclick="CopyToClipboard('tag569');return false;" class="tag-decoration">release-5.1.3</div><div id="tag6135" onclick="CopyToClipboard('tag6135');return false;" class="tag-decoration">release-v5</div><div id="tag8344" onclick="CopyToClipboard('tag8344');return false;" class="tag-decoration">release-v5.1</div><div id="tag16768" onclick="CopyToClipboard('tag16768');return false;" class="tag-decoration">release-v5.1.3</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/4ddb3c4fda361856ab55e9395cac018dca1110a8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35265594397" target="_blank">2026-09-17 19:33:28</a></td></tr>
<tr><td><div id="tag24984" onclick="CopyToClipboard('tag24984');return false;" class="tag-decoration">testing</div><div id="tag6656" onclick="CopyToClipboard('tag6656');return false;" class="tag-decoration">testing-e5e9d54</div><div id="tag7951" onclick="CopyToClipboard('tag7951');return false;" class="tag-decoration">testing-5.1.3</div><div id="tag31047" onclick="CopyToClipboard('tag31047');return false;" class="tag-decoration">testing-v5</div><div id="tag10144" onclick="CopyToClipboard('tag10144');return false;" class="tag-decoration">testing-v5.1</div><div id="tag26888" onclick="CopyToClipboard('tag26888');return false;" class="tag-decoration">testing-v5.1.3</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/e5e9d545af60820a13eb50948a7751082aeadef9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/35317685416" target="_blank">2026-09-18 07:04:03</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
