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
<tr><td><div id="tag15612" onclick="CopyToClipboard('tag15612');return false;" class="tag-decoration">nightly</div><div id="tag2641" onclick="CopyToClipboard('tag2641');return false;" class="tag-decoration">nightly-4fe4597</div><div id="tag6942" onclick="CopyToClipboard('tag6942');return false;" class="tag-decoration">nightly-f2b1a9cafde1a45bf6600594906e15237c401e41</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/4fe4597a1b11d3362d721480eda5c88541fddd74" target="_blank">Version update: 676e70a0df89f878e9267b0359a8d37e115bc66a => f2b1a9cafde1a45bf6600594906e15237c401e41</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/24509017916" target="_blank">2026-04-16 12:00:38</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6064" onclick="CopyToClipboard('tag6064');return false;" class="tag-decoration">release</div><div id="tag27611" onclick="CopyToClipboard('tag27611');return false;" class="tag-decoration">release-cc39ae5</div><div id="tag9128" onclick="CopyToClipboard('tag9128');return false;" class="tag-decoration">release-4.7.0</div><div id="tag12446" onclick="CopyToClipboard('tag12446');return false;" class="tag-decoration">release-v4</div><div id="tag6959" onclick="CopyToClipboard('tag6959');return false;" class="tag-decoration">release-v4.7</div><div id="tag21389" onclick="CopyToClipboard('tag21389');return false;" class="tag-decoration">release-v4.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/cc39ae59825be1d6d2ed007602dbaa4e2e1b7d8e" target="_blank">Version update: 4.6.6 => 4.7.0</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/23952745718" target="_blank">2026-04-03 16:03:53</a></td></tr>
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
