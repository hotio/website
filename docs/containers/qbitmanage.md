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
<tr><td><div id="tag1825" onclick="CopyToClipboard('tag1825');return false;" class="tag-decoration">nightly</div><div id="tag24018" onclick="CopyToClipboard('tag24018');return false;" class="tag-decoration">nightly-6e2b372</div><div id="tag6361" onclick="CopyToClipboard('tag6361');return false;" class="tag-decoration">nightly-a35857912ed9afd89f6c4f7eced0aa9daa66dc36</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/6e2b372cf9275649b5bd2b17348c60f5be5019fd" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/42138389542" target="_blank">2026-11-06 00:39:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20632" onclick="CopyToClipboard('tag20632');return false;" class="tag-decoration">release</div><div id="tag988" onclick="CopyToClipboard('tag988');return false;" class="tag-decoration">release-7866e27</div><div id="tag12492" onclick="CopyToClipboard('tag12492');return false;" class="tag-decoration">release-4.14.0</div><div id="tag17059" onclick="CopyToClipboard('tag17059');return false;" class="tag-decoration">release-v4</div><div id="tag31715" onclick="CopyToClipboard('tag31715');return false;" class="tag-decoration">release-v4.14</div><div id="tag17645" onclick="CopyToClipboard('tag17645');return false;" class="tag-decoration">release-v4.14.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/7866e276a436f60de9c5be93ff43c6f26a3f1aec" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/42138381961" target="_blank">2026-11-06 00:39:09</a></td></tr>
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
