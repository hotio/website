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
<tr><td><div id="tag7795" onclick="CopyToClipboard('tag7795');return false;" class="tag-decoration">nightly</div><div id="tag17334" onclick="CopyToClipboard('tag17334');return false;" class="tag-decoration">nightly-0844a69</div><div id="tag27810" onclick="CopyToClipboard('tag27810');return false;" class="tag-decoration">nightly-535777620dc5cedbd92a52d41bee7c432a6389b5</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/0844a6944229a587a6e1aeadfa786e7693e30299" target="_blank">Version update: dcb81a7234b7feba952b558bd3575a65a141be6e => 535777620dc5cedbd92a52d41bee7c432a6389b5</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21067337007" target="_blank">2026-01-16 12:55:42</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag451" onclick="CopyToClipboard('tag451');return false;" class="tag-decoration">release</div><div id="tag30947" onclick="CopyToClipboard('tag30947');return false;" class="tag-decoration">release-7e510ca</div><div id="tag20296" onclick="CopyToClipboard('tag20296');return false;" class="tag-decoration">release-4.6.5</div><div id="tag8740" onclick="CopyToClipboard('tag8740');return false;" class="tag-decoration">release-v4</div><div id="tag10305" onclick="CopyToClipboard('tag10305');return false;" class="tag-decoration">release-v4.6</div><div id="tag21402" onclick="CopyToClipboard('tag21402');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/7e510cafcefcf5ba860508682e6a8c475f655772" target="_blank">Upstream update: alpinevpn-3043df9 => alpinevpn-c2217dd</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21090395355" target="_blank">2026-01-17 07:01:34</a></td></tr>
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
