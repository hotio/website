---
hide:
  - toc
title: hotio/seerr
status: new
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/seerr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/seerr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/seerr-team/seerr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag13080" onclick="CopyToClipboard('tag13080');return false;" class="tag-decoration">nightly</div><div id="tag12632" onclick="CopyToClipboard('tag12632');return false;" class="tag-decoration">nightly-d3994a7</div><div id="tag15330" onclick="CopyToClipboard('tag15330');return false;" class="tag-decoration">nightly-7379c7370378ef059b8b1455526baa5bccdf5be3</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/d3994a7c7e6fbd866c4a9d1adfb830aebb70d1bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/27103627120" target="_blank">2026-06-07 20:16:41</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag17599" onclick="CopyToClipboard('tag17599');return false;" class="tag-decoration">release</div><div id="tag30345" onclick="CopyToClipboard('tag30345');return false;" class="tag-decoration">release-8ed8b88</div><div id="tag13542" onclick="CopyToClipboard('tag13542');return false;" class="tag-decoration">release-3.3.0</div><div id="tag24818" onclick="CopyToClipboard('tag24818');return false;" class="tag-decoration">release-v3</div><div id="tag17835" onclick="CopyToClipboard('tag17835');return false;" class="tag-decoration">release-v3.3</div><div id="tag6152" onclick="CopyToClipboard('tag6152');return false;" class="tag-decoration">release-v3.3.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/8ed8b883d8ab9f624270b81ee78d703379f2a160" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/26818360701" target="_blank">2026-06-02 12:01:23</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="seerr" \
        -p 5055:5055 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5055/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/seerr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      seerr:
        container_name: seerr
        image: ghcr.io/hotio/seerr
        ports:
          - "5055:5055"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5055/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
