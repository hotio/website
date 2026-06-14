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
<tr><td><div id="tag8476" onclick="CopyToClipboard('tag8476');return false;" class="tag-decoration">nightly</div><div id="tag21118" onclick="CopyToClipboard('tag21118');return false;" class="tag-decoration">nightly-a7efc86</div><div id="tag25144" onclick="CopyToClipboard('tag25144');return false;" class="tag-decoration">nightly-af7141f5754b99260b2fbfae3763f85386d97845</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/a7efc8692a17111b677bec95fe44c2daa56ad30a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27500909147" target="_blank">2026-06-14 13:50:39</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag28746" onclick="CopyToClipboard('tag28746');return false;" class="tag-decoration">release</div><div id="tag13725" onclick="CopyToClipboard('tag13725');return false;" class="tag-decoration">release-388a119</div><div id="tag24471" onclick="CopyToClipboard('tag24471');return false;" class="tag-decoration">release-4.8.1</div><div id="tag5023" onclick="CopyToClipboard('tag5023');return false;" class="tag-decoration">release-v4</div><div id="tag19888" onclick="CopyToClipboard('tag19888');return false;" class="tag-decoration">release-v4.8</div><div id="tag26251" onclick="CopyToClipboard('tag26251');return false;" class="tag-decoration">release-v4.8.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/388a119eb91cb1565f2e536ea21c386693a9b794" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/27277532537" target="_blank">2026-06-10 12:51:46</a></td></tr>
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
