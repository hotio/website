---
hide:
  - toc
title: hotio/bazarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/bazarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/bazarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/morpheus65535/bazarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag13719" onclick="CopyToClipboard('tag13719');return false;" class="tag-decoration">nightly</div><div id="tag7776" onclick="CopyToClipboard('tag7776');return false;" class="tag-decoration">nightly-cb9a759</div><div id="tag23990" onclick="CopyToClipboard('tag23990');return false;" class="tag-decoration">nightly-1.5.5-beta.9</div><div id="tag27803" onclick="CopyToClipboard('tag27803');return false;" class="tag-decoration">nightly-v1</div><div id="tag30687" onclick="CopyToClipboard('tag30687');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag22439" onclick="CopyToClipboard('tag22439');return false;" class="tag-decoration">nightly-v1.5.5</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/cb9a7591691c01374534bec6a0e54428868ffef2" target="_blank">Upstream update: alpinevpn-5648cae => alpinevpn-3f254df</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21246745342" target="_blank">2026-01-22 11:28:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3115" onclick="CopyToClipboard('tag3115');return false;" class="tag-decoration">release</div><div id="tag7148" onclick="CopyToClipboard('tag7148');return false;" class="tag-decoration">release-1f12c33</div><div id="tag2153" onclick="CopyToClipboard('tag2153');return false;" class="tag-decoration">release-1.5.4</div><div id="tag17440" onclick="CopyToClipboard('tag17440');return false;" class="tag-decoration">release-v1</div><div id="tag23589" onclick="CopyToClipboard('tag23589');return false;" class="tag-decoration">release-v1.5</div><div id="tag13715" onclick="CopyToClipboard('tag13715');return false;" class="tag-decoration">release-v1.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/1f12c33b95ecdb8f1a0cace7ccdece61b3172c30" target="_blank">Upstream update: alpinevpn-489d5d6 => alpinevpn-5648cae</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/21244680645" target="_blank">2026-01-22 10:18:32</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="bazarr" \
        -p 6767:6767 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6767/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/bazarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      bazarr:
        container_name: bazarr
        image: ghcr.io/hotio/bazarr
        ports:
          - "6767:6767"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6767/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
