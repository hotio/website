---
hide:
  - toc
title: hotio/tautulli
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/tautulli){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/tautulli){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/tautulli/tautulli){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32738" onclick="CopyToClipboard('tag32738');return false;" class="tag-decoration">release</div><div id="tag11468" onclick="CopyToClipboard('tag11468');return false;" class="tag-decoration">release-e9247eb</div><div id="tag9695" onclick="CopyToClipboard('tag9695');return false;" class="tag-decoration">release-2.19.1</div><div id="tag18838" onclick="CopyToClipboard('tag18838');return false;" class="tag-decoration">release-v2</div><div id="tag4489" onclick="CopyToClipboard('tag4489');return false;" class="tag-decoration">release-v2.19</div><div id="tag8055" onclick="CopyToClipboard('tag8055');return false;" class="tag-decoration">release-v2.19.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/tautulli/commit/e9247ebfd91822df540f070cbd366111f0072847" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/45505172807" target="_blank">2026-11-24 22:54:00</a></td></tr>
<tr><td><div id="tag29784" onclick="CopyToClipboard('tag29784');return false;" class="tag-decoration">testing</div><div id="tag30115" onclick="CopyToClipboard('tag30115');return false;" class="tag-decoration">testing-c5a0198</div><div id="tag1777" onclick="CopyToClipboard('tag1777');return false;" class="tag-decoration">testing-2.19.1</div><div id="tag20316" onclick="CopyToClipboard('tag20316');return false;" class="tag-decoration">testing-v2</div><div id="tag23192" onclick="CopyToClipboard('tag23192');return false;" class="tag-decoration">testing-v2.19</div><div id="tag19688" onclick="CopyToClipboard('tag19688');return false;" class="tag-decoration">testing-v2.19.1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/tautulli/commit/c5a0198557aa5a5de2afe7932939b9e917655554" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/tautulli/actions/runs/45551173055" target="_blank">2026-11-25 05:05:35</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="tautulli" \
        -p 8181:8181 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8181/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/tautulli
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      tautulli:
        container_name: tautulli
        image: ghcr.io/hotio/tautulli
        ports:
          - "8181:8181"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8181/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
