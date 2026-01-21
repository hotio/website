---
hide:
  - toc
title: hotio/overseerr
status: deprecated
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/overseerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/overseerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sct/overseerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag19636" onclick="CopyToClipboard('tag19636');return false;" class="tag-decoration">nightly</div><div id="tag10831" onclick="CopyToClipboard('tag10831');return false;" class="tag-decoration">nightly-668e289</div><div id="tag29748" onclick="CopyToClipboard('tag29748');return false;" class="tag-decoration">nightly-5ef098f6d844dde6d5d9076c8814e9a34bd73451</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/overseerr/commit/668e28954f676c0f20f073ce984bb4bda590e662" target="_blank">Upstream update: alpinevpn-7a36f80 => alpinevpn-1d9f62f</a></td><td><a href="https://github.com/hotio/overseerr/actions/runs/21198335696" target="_blank">2026-01-21 05:24:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5407" onclick="CopyToClipboard('tag5407');return false;" class="tag-decoration">release</div><div id="tag30343" onclick="CopyToClipboard('tag30343');return false;" class="tag-decoration">release-8177b37</div><div id="tag2642" onclick="CopyToClipboard('tag2642');return false;" class="tag-decoration">release-1.34.0</div><div id="tag6620" onclick="CopyToClipboard('tag6620');return false;" class="tag-decoration">release-v1</div><div id="tag25064" onclick="CopyToClipboard('tag25064');return false;" class="tag-decoration">release-v1.34</div><div id="tag16178" onclick="CopyToClipboard('tag16178');return false;" class="tag-decoration">release-v1.34.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/overseerr/commit/8177b37e03ff2bfbe3b0b9aba7ecf17f598bcb50" target="_blank">Upstream update: alpinevpn-1d9f62f => alpinevpn-2c8fbe3</a></td><td><a href="https://github.com/hotio/overseerr/actions/runs/21200263198" target="_blank">2026-01-21 06:57:37</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="overseerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/overseerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      overseerr:
        container_name: overseerr
        image: ghcr.io/hotio/overseerr
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
