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
<tr><td><div id="tag30766" onclick="CopyToClipboard('tag30766');return false;" class="tag-decoration">nightly</div><div id="tag12999" onclick="CopyToClipboard('tag12999');return false;" class="tag-decoration">nightly-8c6880b24e9aba738948fcd03eb874210e0d5b05</div><div id="tag3432" onclick="CopyToClipboard('tag3432');return false;" class="tag-decoration">nightly-384cdc4</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/384cdc47ff280b3b1aef94a26683765d7bce85a1" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/20898163119" target="_blank">2026-01-11 16:17:33</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2312" onclick="CopyToClipboard('tag2312');return false;" class="tag-decoration">release</div><div id="tag12027" onclick="CopyToClipboard('tag12027');return false;" class="tag-decoration">release-4.6.5</div><div id="tag3823" onclick="CopyToClipboard('tag3823');return false;" class="tag-decoration">release-8167ea1</div><div id="tag14861" onclick="CopyToClipboard('tag14861');return false;" class="tag-decoration">release-v4</div><div id="tag20295" onclick="CopyToClipboard('tag20295');return false;" class="tag-decoration">release-v4.6</div><div id="tag23694" onclick="CopyToClipboard('tag23694');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/8167ea15d8212b290ae0727d62b8caf724398cfa" target="_blank">Upstream update: alpinevpn-b4dc175 => alpinevpn-9c717da</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/20898163249" target="_blank">2026-01-11 16:17:34</a></td></tr>
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
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/qbitmanage
    ```

    --8<-- "includes/annotations.md"

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
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
