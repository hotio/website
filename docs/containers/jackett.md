---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3464" onclick="CopyToClipboard('tag3464');return false;" class="tag-decoration">release</div><div id="tag6636" onclick="CopyToClipboard('tag6636');return false;" class="tag-decoration">release-c08cf9f</div><div id="tag19584" onclick="CopyToClipboard('tag19584');return false;" class="tag-decoration">release-0.24.1060</div><div id="tag4000" onclick="CopyToClipboard('tag4000');return false;" class="tag-decoration">release-v0</div><div id="tag15485" onclick="CopyToClipboard('tag15485');return false;" class="tag-decoration">release-v0.24</div><div id="tag14504" onclick="CopyToClipboard('tag14504');return false;" class="tag-decoration">release-v0.24.1060</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/c08cf9fbaca59b4043baa2530e5524657d5a7fc5" target="_blank">Version update: 0.24.1044 => 0.24.1060</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21775645379" target="_blank">2026-02-07 06:23:36</a></td></tr>
<tr><td><div id="tag26954" onclick="CopyToClipboard('tag26954');return false;" class="tag-decoration">testing</div><div id="tag14779" onclick="CopyToClipboard('tag14779');return false;" class="tag-decoration">testing-47c37b5</div><div id="tag10089" onclick="CopyToClipboard('tag10089');return false;" class="tag-decoration">testing-0.24.1060</div><div id="tag22994" onclick="CopyToClipboard('tag22994');return false;" class="tag-decoration">testing-v0</div><div id="tag20823" onclick="CopyToClipboard('tag20823');return false;" class="tag-decoration">testing-v0.24</div><div id="tag11122" onclick="CopyToClipboard('tag11122');return false;" class="tag-decoration">testing-v0.24.1060</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/47c37b5d0209a45036352896da93d9f3b66f9f48" target="_blank">Version update: 0.24.1044 => 0.24.1060</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21775645581" target="_blank">2026-02-07 06:23:37</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
