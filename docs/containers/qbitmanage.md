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
<tr><td><div id="tag12732" onclick="CopyToClipboard('tag12732');return false;" class="tag-decoration">nightly</div><div id="tag16299" onclick="CopyToClipboard('tag16299');return false;" class="tag-decoration">nightly-7b03afc</div><div id="tag27964" onclick="CopyToClipboard('tag27964');return false;" class="tag-decoration">nightly-01a01578173c8c0061c1caf8b56c5eabedc34836</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/qbitmanage/commit/7b03afccfb8e077cac046cdf4c6d1574fb02fd1d" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21244711277" target="_blank">2026-01-22 10:19:32</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6323" onclick="CopyToClipboard('tag6323');return false;" class="tag-decoration">release</div><div id="tag19152" onclick="CopyToClipboard('tag19152');return false;" class="tag-decoration">release-49b3665</div><div id="tag6828" onclick="CopyToClipboard('tag6828');return false;" class="tag-decoration">release-4.6.5</div><div id="tag12688" onclick="CopyToClipboard('tag12688');return false;" class="tag-decoration">release-v4</div><div id="tag23553" onclick="CopyToClipboard('tag23553');return false;" class="tag-decoration">release-v4.6</div><div id="tag14115" onclick="CopyToClipboard('tag14115');return false;" class="tag-decoration">release-v4.6.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/qbitmanage/commit/49b3665fb6f9eb45c5e9498f6984c77211a06d34" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/qbitmanage/actions/runs/21244711933" target="_blank">2026-01-22 10:19:34</a></td></tr>
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
