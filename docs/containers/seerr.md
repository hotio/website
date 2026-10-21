---
hide:
  - toc
title: hotio/seerr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag26889" onclick="CopyToClipboard('tag26889');return false;" class="tag-decoration">nightly</div><div id="tag17328" onclick="CopyToClipboard('tag17328');return false;" class="tag-decoration">nightly-2774352</div><div id="tag21299" onclick="CopyToClipboard('tag21299');return false;" class="tag-decoration">nightly-62ed636b0d4afbac8d3690c6c005d0dcd5b0d543</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/277435278160eff0bccecd7d1cc38c1ea29ca411" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/39659780726" target="_blank">2026-10-21 19:13:44</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11700" onclick="CopyToClipboard('tag11700');return false;" class="tag-decoration">release</div><div id="tag24256" onclick="CopyToClipboard('tag24256');return false;" class="tag-decoration">release-2c63a98</div><div id="tag20704" onclick="CopyToClipboard('tag20704');return false;" class="tag-decoration">release-3.5.1</div><div id="tag15817" onclick="CopyToClipboard('tag15817');return false;" class="tag-decoration">release-v3</div><div id="tag17751" onclick="CopyToClipboard('tag17751');return false;" class="tag-decoration">release-v3.5</div><div id="tag11734" onclick="CopyToClipboard('tag11734');return false;" class="tag-decoration">release-v3.5.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/2c63a982a589ef80e1578f89d0640c050182d525" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/39659768633" target="_blank">2026-10-21 19:13:38</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
