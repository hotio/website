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
<tr><td><div id="tag927" onclick="CopyToClipboard('tag927');return false;" class="tag-decoration">nightly</div><div id="tag2548" onclick="CopyToClipboard('tag2548');return false;" class="tag-decoration">nightly-b7632ed</div><div id="tag11150" onclick="CopyToClipboard('tag11150');return false;" class="tag-decoration">nightly-4fa2c71b846902ca33fb5b4784ff059146d87a97</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/b7632edb76dfa8471ed20c5e193d18338a4711b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/26049659664" target="_blank">2026-05-18 17:32:25</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5446" onclick="CopyToClipboard('tag5446');return false;" class="tag-decoration">release</div><div id="tag27927" onclick="CopyToClipboard('tag27927');return false;" class="tag-decoration">release-3074e43</div><div id="tag4431" onclick="CopyToClipboard('tag4431');return false;" class="tag-decoration">release-3.2.0</div><div id="tag26252" onclick="CopyToClipboard('tag26252');return false;" class="tag-decoration">release-v3</div><div id="tag9474" onclick="CopyToClipboard('tag9474');return false;" class="tag-decoration">release-v3.2</div><div id="tag27461" onclick="CopyToClipboard('tag27461');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/3074e43542a27abffe33b26ddfcda70bfa6953e6" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25987587512" target="_blank">2026-05-17 09:51:48</a></td></tr>
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
