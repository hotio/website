---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag13747" onclick="CopyToClipboard('tag13747');return false;" class="tag-decoration">nightly</div><div id="tag22772" onclick="CopyToClipboard('tag22772');return false;" class="tag-decoration">nightly-94abe5e</div><div id="tag7840" onclick="CopyToClipboard('tag7840');return false;" class="tag-decoration">nightly-5b3785f16490e8bd603dbe71915a6233379e72e1</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/94abe5edc1952338d861ed0b356587f887b2c81e" target="_blank">Upstream update: noblevpn-db01928 => noblevpn-a3516fa</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21124055159" target="_blank">2026-01-19 03:14:15</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14394" onclick="CopyToClipboard('tag14394');return false;" class="tag-decoration">release</div><div id="tag8873" onclick="CopyToClipboard('tag8873');return false;" class="tag-decoration">release-429e8eb</div><div id="tag20443" onclick="CopyToClipboard('tag20443');return false;" class="tag-decoration">release-0.30.1</div><div id="tag14382" onclick="CopyToClipboard('tag14382');return false;" class="tag-decoration">release-v0</div><div id="tag1790" onclick="CopyToClipboard('tag1790');return false;" class="tag-decoration">release-v0.30</div><div id="tag8357" onclick="CopyToClipboard('tag8357');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/429e8eb9fe196b6efd66b544b4870ec0c366614f" target="_blank">Upstream update: noblevpn-9c33abd => noblevpn-db01928</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21113702407" target="_blank">2026-01-18 14:57:37</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9999/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9999/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
