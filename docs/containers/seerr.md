---
hide:
  - toc
title: hotio/seerr
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
<tr><td><div id="tag3691" onclick="CopyToClipboard('tag3691');return false;" class="tag-decoration">nightly</div><div id="tag25630" onclick="CopyToClipboard('tag25630');return false;" class="tag-decoration">nightly-9fd7a82</div><div id="tag1747" onclick="CopyToClipboard('tag1747');return false;" class="tag-decoration">nightly-5c04640b631a3d20712006fea24200762b2e6f70</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/9fd7a82329a42714ac2d2289a8b4109af8712b0c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/33588405984" target="_blank">2026-09-02 03:48:01</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24964" onclick="CopyToClipboard('tag24964');return false;" class="tag-decoration">release</div><div id="tag17756" onclick="CopyToClipboard('tag17756');return false;" class="tag-decoration">release-ce102f0</div><div id="tag14736" onclick="CopyToClipboard('tag14736');return false;" class="tag-decoration">release-3.4.1</div><div id="tag12723" onclick="CopyToClipboard('tag12723');return false;" class="tag-decoration">release-v3</div><div id="tag22829" onclick="CopyToClipboard('tag22829');return false;" class="tag-decoration">release-v3.4</div><div id="tag15310" onclick="CopyToClipboard('tag15310');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/ce102f054b24ebce9500d1776f6e030f3b4c2e63" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/33588408725" target="_blank">2026-09-02 03:48:04</a></td></tr>
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
