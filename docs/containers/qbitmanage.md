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
<tr><td><div id="tag8654" onclick="CopyToClipboard('tag8654');return false;" class="tag-decoration">nightly</div><div id="tag24291" onclick="CopyToClipboard('tag24291');return false;" class="tag-decoration">nightly-13d40be</div><div id="tag9934" onclick="CopyToClipboard('tag9934');return false;" class="tag-decoration">nightly-68f3786f5b33a5f259ede48d4fa2982c2d4d2e5a</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/13d40be7246a0386f3ce643310e292657647a2ad" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/42324487727" target="_blank">2026-11-07 01:31:04</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31116" onclick="CopyToClipboard('tag31116');return false;" class="tag-decoration">release</div><div id="tag29671" onclick="CopyToClipboard('tag29671');return false;" class="tag-decoration">release-7de249e</div><div id="tag799" onclick="CopyToClipboard('tag799');return false;" class="tag-decoration">release-4.15.0</div><div id="tag24579" onclick="CopyToClipboard('tag24579');return false;" class="tag-decoration">release-v4</div><div id="tag23863" onclick="CopyToClipboard('tag23863');return false;" class="tag-decoration">release-v4.15</div><div id="tag6101" onclick="CopyToClipboard('tag6101');return false;" class="tag-decoration">release-v4.15.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/7de249ef091f05e703445f68f7cd0d00695967bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/42244183075" target="_blank">2026-11-06 15:33:39</a></td></tr>
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
