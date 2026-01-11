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
<tr><td><div id="tag27661" onclick="CopyToClipboard('tag27661');return false;" class="tag-decoration">nightly</div><div id="tag25371" onclick="CopyToClipboard('tag25371');return false;" class="tag-decoration">nightly-5ef098f6d844dde6d5d9076c8814e9a34bd73451</div><div id="tag12467" onclick="CopyToClipboard('tag12467');return false;" class="tag-decoration">nightly-f38fe49</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/overseerr/commit/f38fe494a83e0cb4c36bcf433d0395e57f32ed0e" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/overseerr/actions/runs/20898161362" target="_blank">2026-01-11 16:17:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag11999" onclick="CopyToClipboard('tag11999');return false;" class="tag-decoration">release</div><div id="tag8144" onclick="CopyToClipboard('tag8144');return false;" class="tag-decoration">release-1.34.0</div><div id="tag7892" onclick="CopyToClipboard('tag7892');return false;" class="tag-decoration">release-3c9ee2c</div><div id="tag21176" onclick="CopyToClipboard('tag21176');return false;" class="tag-decoration">release-v1</div><div id="tag14365" onclick="CopyToClipboard('tag14365');return false;" class="tag-decoration">release-v1.34</div><div id="tag12504" onclick="CopyToClipboard('tag12504');return false;" class="tag-decoration">release-v1.34.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/overseerr/commit/3c9ee2c30d3cd3abbe7d2049f9642337bcebcf51" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/overseerr/actions/runs/20898161533" target="_blank">2026-01-11 16:17:26</a></td></tr>
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
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/overseerr
    ```

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
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
