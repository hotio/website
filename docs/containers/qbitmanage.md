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
<tr><td><div id="tag22277" onclick="CopyToClipboard('tag22277');return false;" class="tag-decoration">nightly</div><div id="tag11859" onclick="CopyToClipboard('tag11859');return false;" class="tag-decoration">nightly-a948ff8</div><div id="tag15431" onclick="CopyToClipboard('tag15431');return false;" class="tag-decoration">nightly-dcb81a7234b7feba952b558bd3575a65a141be6e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/a948ff844eaca3b886601fb6ea99bea819e8bb40" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21063291566" target="_blank">2026-01-16 10:17:34</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8415" onclick="CopyToClipboard('tag8415');return false;" class="tag-decoration">release</div><div id="tag15640" onclick="CopyToClipboard('tag15640');return false;" class="tag-decoration">release-ce9257a</div><div id="tag11659" onclick="CopyToClipboard('tag11659');return false;" class="tag-decoration">release-4.6.5</div><div id="tag19409" onclick="CopyToClipboard('tag19409');return false;" class="tag-decoration">release-v4</div><div id="tag11996" onclick="CopyToClipboard('tag11996');return false;" class="tag-decoration">release-v4.6</div><div id="tag28036" onclick="CopyToClipboard('tag28036');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/ce9257a91bd1e45aa9f18d0aa01aae6cc85873ed" target="_blank">Upstream update: alpinevpn-156b37c => alpinevpn-c4f8fae</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21063292018" target="_blank">2026-01-16 10:17:36</a></td></tr>
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
