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
<tr><td><div id="tag26358" onclick="CopyToClipboard('tag26358');return false;" class="tag-decoration">nightly</div><div id="tag8920" onclick="CopyToClipboard('tag8920');return false;" class="tag-decoration">nightly-58ecc7a</div><div id="tag3696" onclick="CopyToClipboard('tag3696');return false;" class="tag-decoration">nightly-7e46ed736ec7eba0be419bc965893df2818cee07</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/58ecc7abb7cda0018a266c7f9e542323f2ded7d5" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27497965423" target="_blank">2026-06-14 11:52:21</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag22011" onclick="CopyToClipboard('tag22011');return false;" class="tag-decoration">release</div><div id="tag5665" onclick="CopyToClipboard('tag5665');return false;" class="tag-decoration">release-388a119</div><div id="tag9603" onclick="CopyToClipboard('tag9603');return false;" class="tag-decoration">release-4.8.1</div><div id="tag9463" onclick="CopyToClipboard('tag9463');return false;" class="tag-decoration">release-v4</div><div id="tag10165" onclick="CopyToClipboard('tag10165');return false;" class="tag-decoration">release-v4.8</div><div id="tag8760" onclick="CopyToClipboard('tag8760');return false;" class="tag-decoration">release-v4.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/388a119eb91cb1565f2e536ea21c386693a9b794" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27277532537" target="_blank">2026-06-10 12:51:46</a></td></tr>
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
