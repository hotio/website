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
<tr><td><div id="tag27712" onclick="CopyToClipboard('tag27712');return false;" class="tag-decoration">nightly</div><div id="tag13768" onclick="CopyToClipboard('tag13768');return false;" class="tag-decoration">nightly-e523dee</div><div id="tag12055" onclick="CopyToClipboard('tag12055');return false;" class="tag-decoration">nightly-1d1fdda2797b4242e9ac921fef6090d743d6a854</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/e523dee0f4b2b5509e3f6b7297c4afd2724ab172" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27637565996" target="_blank">2026-06-16 17:59:49</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24854" onclick="CopyToClipboard('tag24854');return false;" class="tag-decoration">release</div><div id="tag31780" onclick="CopyToClipboard('tag31780');return false;" class="tag-decoration">release-388a119</div><div id="tag1004" onclick="CopyToClipboard('tag1004');return false;" class="tag-decoration">release-4.8.1</div><div id="tag8274" onclick="CopyToClipboard('tag8274');return false;" class="tag-decoration">release-v4</div><div id="tag28670" onclick="CopyToClipboard('tag28670');return false;" class="tag-decoration">release-v4.8</div><div id="tag16754" onclick="CopyToClipboard('tag16754');return false;" class="tag-decoration">release-v4.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/388a119eb91cb1565f2e536ea21c386693a9b794" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27277532537" target="_blank">2026-06-10 12:51:46</a></td></tr>
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
