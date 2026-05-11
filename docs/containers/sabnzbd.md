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
<tr><td><div id="tag22112" onclick="CopyToClipboard('tag22112');return false;" class="tag-decoration">nightly</div><div id="tag18188" onclick="CopyToClipboard('tag18188');return false;" class="tag-decoration">nightly-b090d9a</div><div id="tag24607" onclick="CopyToClipboard('tag24607');return false;" class="tag-decoration">nightly-7abb39d02d7833cc929e1379b0be6e9bfe7d5bd7</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/b090d9ac9fc5f9e178c7509424e599f54d1e383c" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25664511373" target="_blank">2026-05-11 10:24:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22964" onclick="CopyToClipboard('tag22964');return false;" class="tag-decoration">release</div><div id="tag23119" onclick="CopyToClipboard('tag23119');return false;" class="tag-decoration">release-367f17a</div><div id="tag6943" onclick="CopyToClipboard('tag6943');return false;" class="tag-decoration">release-5.0.1</div><div id="tag25227" onclick="CopyToClipboard('tag25227');return false;" class="tag-decoration">release-v5</div><div id="tag14503" onclick="CopyToClipboard('tag14503');return false;" class="tag-decoration">release-v5.0</div><div id="tag13929" onclick="CopyToClipboard('tag13929');return false;" class="tag-decoration">release-v5.0.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/367f17a3c6637b6f7d889a0a0ded505b0de32abe" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25664513232" target="_blank">2026-05-11 10:24:42</a></td></tr>
<tr><td><div id="tag6631" onclick="CopyToClipboard('tag6631');return false;" class="tag-decoration">testing</div><div id="tag22498" onclick="CopyToClipboard('tag22498');return false;" class="tag-decoration">testing-28b649f</div><div id="tag28690" onclick="CopyToClipboard('tag28690');return false;" class="tag-decoration">testing-5.0.2RC1</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/28b649f53c14b777cf35f4842a79116be660cc49" target="_blank">Upstream update: alpinevpn-0fe4477 => alpinevpn-4ed63ea</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/25664515161" target="_blank">2026-05-11 10:24:45</a></td></tr>
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
