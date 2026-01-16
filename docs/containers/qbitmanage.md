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
<tr><td><div id="tag19412" onclick="CopyToClipboard('tag19412');return false;" class="tag-decoration">nightly</div><div id="tag23721" onclick="CopyToClipboard('tag23721');return false;" class="tag-decoration">nightly-aaa7495</div><div id="tag23371" onclick="CopyToClipboard('tag23371');return false;" class="tag-decoration">nightly-dcb81a7234b7feba952b558bd3575a65a141be6e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/aaa74957a08fe0e2b0cfadcc0aa8eaffffa296f2" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21060546804" target="_blank">2026-01-16 08:33:48</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5995" onclick="CopyToClipboard('tag5995');return false;" class="tag-decoration">release</div><div id="tag24308" onclick="CopyToClipboard('tag24308');return false;" class="tag-decoration">release-670a91e</div><div id="tag9449" onclick="CopyToClipboard('tag9449');return false;" class="tag-decoration">release-4.6.5</div><div id="tag26539" onclick="CopyToClipboard('tag26539');return false;" class="tag-decoration">release-v4</div><div id="tag6253" onclick="CopyToClipboard('tag6253');return false;" class="tag-decoration">release-v4.6</div><div id="tag28948" onclick="CopyToClipboard('tag28948');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/670a91e33aaa6eb94efaecffcbd9786c41ab1eef" target="_blank">Upstream update: alpinevpn-e7368e6 => alpinevpn-156b37c</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21060547034" target="_blank">2026-01-16 08:33:49</a></td></tr>
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
