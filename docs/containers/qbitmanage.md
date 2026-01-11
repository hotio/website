---
hide:
  - toc
title: hotio/qbitmanage
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/qbitmanage){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/StuffAnThings/qbit_manage){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag857" onclick="CopyToClipboard('tag857');return false;" class="tag-decoration">nightly</div><div id="tag730" onclick="CopyToClipboard('tag730');return false;" class="tag-decoration">nightly-8c6880b24e9aba738948fcd03eb874210e0d5b05</div><div id="tag23556" onclick="CopyToClipboard('tag23556');return false;" class="tag-decoration">nightly-2ad6b5e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/2ad6b5e9dc87cd195607198d4029e0a5fbd384c7" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/20892087664" target="_blank">2026-01-11 08:19:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18171" onclick="CopyToClipboard('tag18171');return false;" class="tag-decoration">release</div><div id="tag2870" onclick="CopyToClipboard('tag2870');return false;" class="tag-decoration">release-4.6.5</div><div id="tag9930" onclick="CopyToClipboard('tag9930');return false;" class="tag-decoration">release-fb6d994</div><div id="tag22579" onclick="CopyToClipboard('tag22579');return false;" class="tag-decoration">release-v4</div><div id="tag7872" onclick="CopyToClipboard('tag7872');return false;" class="tag-decoration">release-v4.6</div><div id="tag23378" onclick="CopyToClipboard('tag23378');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/fb6d994524cebb007e8290666a4ada94782864de" target="_blank">Upstream update: alpinevpn-0904450 => alpinevpn-5b650ae</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/20892087803" target="_blank">2026-01-11 08:19:46</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="qbitmanage" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="8080/tcp" \
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      qbitmanage:
        container_name: qbitmanage
        image: ghcr.io/hotio/qbitmanage
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
