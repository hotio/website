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
<tr><td><div id="tag31717" onclick="CopyToClipboard('tag31717');return false;" class="tag-decoration">nightly</div><div id="tag8618" onclick="CopyToClipboard('tag8618');return false;" class="tag-decoration">nightly-520d0fb</div><div id="tag27853" onclick="CopyToClipboard('tag27853');return false;" class="tag-decoration">nightly-5b3785f16490e8bd603dbe71915a6233379e72e1</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/520d0fba6c4a858adc54a6e0fe95068d76f13064" target="_blank">Upstream update: noblevpn-9c33abd => noblevpn-db01928</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21113702303" target="_blank">2026-01-18 14:57:36</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9310" onclick="CopyToClipboard('tag9310');return false;" class="tag-decoration">release</div><div id="tag15725" onclick="CopyToClipboard('tag15725');return false;" class="tag-decoration">release-429e8eb</div><div id="tag20815" onclick="CopyToClipboard('tag20815');return false;" class="tag-decoration">release-0.30.1</div><div id="tag11194" onclick="CopyToClipboard('tag11194');return false;" class="tag-decoration">release-v0</div><div id="tag15087" onclick="CopyToClipboard('tag15087');return false;" class="tag-decoration">release-v0.30</div><div id="tag10589" onclick="CopyToClipboard('tag10589');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/429e8eb9fe196b6efd66b544b4870ec0c366614f" target="_blank">Upstream update: noblevpn-9c33abd => noblevpn-db01928</a></td><td><a href="https://github.com/hotio/stash/actions/runs/21113702407" target="_blank">2026-01-18 14:57:37</a></td></tr>
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
