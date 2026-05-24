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
<tr><td><div id="tag20043" onclick="CopyToClipboard('tag20043');return false;" class="tag-decoration">nightly</div><div id="tag14815" onclick="CopyToClipboard('tag14815');return false;" class="tag-decoration">nightly-bc827c0</div><div id="tag11581" onclick="CopyToClipboard('tag11581');return false;" class="tag-decoration">nightly-32169d9051166d0e44baca53744f2b826573a121</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/bc827c0a284dbb0a6b1517bbd7191346f16bcd9e" target="_blank">Modified: packages.txt</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/26363873814" target="_blank">2026-05-24 14:27:06</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27540" onclick="CopyToClipboard('tag27540');return false;" class="tag-decoration">release</div><div id="tag13960" onclick="CopyToClipboard('tag13960');return false;" class="tag-decoration">release-3074e43</div><div id="tag3176" onclick="CopyToClipboard('tag3176');return false;" class="tag-decoration">release-3.2.0</div><div id="tag12580" onclick="CopyToClipboard('tag12580');return false;" class="tag-decoration">release-v3</div><div id="tag18870" onclick="CopyToClipboard('tag18870');return false;" class="tag-decoration">release-v3.2</div><div id="tag17206" onclick="CopyToClipboard('tag17206');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/3074e43542a27abffe33b26ddfcda70bfa6953e6" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25987587512" target="_blank">2026-05-17 09:51:48</a></td></tr>
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
