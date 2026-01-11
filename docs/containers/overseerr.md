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
<tr><td><div id="tag13805" onclick="CopyToClipboard('tag13805');return false;" class="tag-decoration">nightly</div><div id="tag10410" onclick="CopyToClipboard('tag10410');return false;" class="tag-decoration">nightly-5ef098f6d844dde6d5d9076c8814e9a34bd73451</div><div id="tag31562" onclick="CopyToClipboard('tag31562');return false;" class="tag-decoration">nightly-925e663</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/overseerr/commit/925e6635e88caa3aea3dde2b4faa3902dde7861d" target="_blank">Upstream update: alpinevpn-5b650ae => alpinevpn-b4dc175</a></td><td><a href="https://github.com/hotio/overseerr/actions/runs/20895142016" target="_blank">2026-01-11 12:28:59</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27197" onclick="CopyToClipboard('tag27197');return false;" class="tag-decoration">release</div><div id="tag17839" onclick="CopyToClipboard('tag17839');return false;" class="tag-decoration">release-1.34.0</div><div id="tag19975" onclick="CopyToClipboard('tag19975');return false;" class="tag-decoration">release-4992077</div><div id="tag1004" onclick="CopyToClipboard('tag1004');return false;" class="tag-decoration">release-v1</div><div id="tag11735" onclick="CopyToClipboard('tag11735');return false;" class="tag-decoration">release-v1.34</div><div id="tag5929" onclick="CopyToClipboard('tag5929');return false;" class="tag-decoration">release-v1.34.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/overseerr/commit/49920771708a1fc23c0530e110c8a85f8e7a2cf6" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/overseerr/actions/runs/20892086458" target="_blank">2026-01-11 08:19:39</a></td></tr>
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
