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
<tr><td><div id="tag26191" onclick="CopyToClipboard('tag26191');return false;" class="tag-decoration">nightly</div><div id="tag29688" onclick="CopyToClipboard('tag29688');return false;" class="tag-decoration">nightly-567a041</div><div id="tag13319" onclick="CopyToClipboard('tag13319');return false;" class="tag-decoration">nightly-1.5.7-beta.66</div><div id="tag29969" onclick="CopyToClipboard('tag29969');return false;" class="tag-decoration">nightly-v1</div><div id="tag20160" onclick="CopyToClipboard('tag20160');return false;" class="tag-decoration">nightly-v1.5</div><div id="tag17987" onclick="CopyToClipboard('tag17987');return false;" class="tag-decoration">nightly-v1.5.7</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/bazarr/commit/567a0416898dfd98032a4f0a84a7b6f0bef1e2d2" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28443299730" target="_blank">2026-06-30 12:11:29</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10309" onclick="CopyToClipboard('tag10309');return false;" class="tag-decoration">release</div><div id="tag11869" onclick="CopyToClipboard('tag11869');return false;" class="tag-decoration">release-017b4d3</div><div id="tag15622" onclick="CopyToClipboard('tag15622');return false;" class="tag-decoration">release-1.5.6</div><div id="tag5362" onclick="CopyToClipboard('tag5362');return false;" class="tag-decoration">release-v1</div><div id="tag32277" onclick="CopyToClipboard('tag32277');return false;" class="tag-decoration">release-v1.5</div><div id="tag11896" onclick="CopyToClipboard('tag11896');return false;" class="tag-decoration">release-v1.5.6</div></td><td>Releases</td><td><a href="https://github.com/hotio/bazarr/commit/017b4d319a3f6cb528b8f2bd8ab9f911b8a6aa50" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/bazarr/actions/runs/28391242685" target="_blank">2026-06-29 17:39:34</a></td></tr>
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
