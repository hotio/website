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
<tr><td><div id="tag23022" onclick="CopyToClipboard('tag23022');return false;" class="tag-decoration">nightly</div><div id="tag11889" onclick="CopyToClipboard('tag11889');return false;" class="tag-decoration">nightly-bf54cbd</div><div id="tag464" onclick="CopyToClipboard('tag464');return false;" class="tag-decoration">nightly-33456e67d12bdf143c8976815688d0b4b561b665</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/bf54cbd3751196e43053a84e97ee05490a1b69bd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/28798607522" target="_blank">2026-07-06 14:21:43</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17333" onclick="CopyToClipboard('tag17333');return false;" class="tag-decoration">release</div><div id="tag13643" onclick="CopyToClipboard('tag13643');return false;" class="tag-decoration">release-e221d72</div><div id="tag29570" onclick="CopyToClipboard('tag29570');return false;" class="tag-decoration">release-4.9.1</div><div id="tag1353" onclick="CopyToClipboard('tag1353');return false;" class="tag-decoration">release-v4</div><div id="tag22094" onclick="CopyToClipboard('tag22094');return false;" class="tag-decoration">release-v4.9</div><div id="tag21382" onclick="CopyToClipboard('tag21382');return false;" class="tag-decoration">release-v4.9.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/e221d72efd8d39f7fb1467e928ba94c545a6030b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/28600672027" target="_blank">2026-07-02 15:10:25</a></td></tr>
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
