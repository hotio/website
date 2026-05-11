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
<tr><td><div id="tag28852" onclick="CopyToClipboard('tag28852');return false;" class="tag-decoration">nightly</div><div id="tag6200" onclick="CopyToClipboard('tag6200');return false;" class="tag-decoration">nightly-1e3ae8e</div><div id="tag19221" onclick="CopyToClipboard('tag19221');return false;" class="tag-decoration">nightly-f1be2582a9bf3dd6be1b589591195d864f2a40ac</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/1e3ae8e4d916302e1c6f18d40bdd19afb32f2de8" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25701861388" target="_blank">2026-05-11 22:47:46</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27014" onclick="CopyToClipboard('tag27014');return false;" class="tag-decoration">release</div><div id="tag32320" onclick="CopyToClipboard('tag32320');return false;" class="tag-decoration">release-ccee18a</div><div id="tag14492" onclick="CopyToClipboard('tag14492');return false;" class="tag-decoration">release-4.7.0</div><div id="tag5096" onclick="CopyToClipboard('tag5096');return false;" class="tag-decoration">release-v4</div><div id="tag3809" onclick="CopyToClipboard('tag3809');return false;" class="tag-decoration">release-v4.7</div><div id="tag5259" onclick="CopyToClipboard('tag5259');return false;" class="tag-decoration">release-v4.7.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/ccee18a55e48f8316775356fdcfc1326c1276954" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/25701864385" target="_blank">2026-05-11 22:47:52</a></td></tr>
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
