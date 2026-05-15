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
<tr><td><div id="tag1586" onclick="CopyToClipboard('tag1586');return false;" class="tag-decoration">nightly</div><div id="tag2164" onclick="CopyToClipboard('tag2164');return false;" class="tag-decoration">nightly-633781b</div><div id="tag27729" onclick="CopyToClipboard('tag27729');return false;" class="tag-decoration">nightly-92c486d3124ece4379a122d004e157074175b83e</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/633781b19e2fd742edf3e8ca51c2797d961440d4" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25925997690" target="_blank">2026-05-15 15:23:51</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18928" onclick="CopyToClipboard('tag18928');return false;" class="tag-decoration">release</div><div id="tag24460" onclick="CopyToClipboard('tag24460');return false;" class="tag-decoration">release-645f4c8</div><div id="tag16866" onclick="CopyToClipboard('tag16866');return false;" class="tag-decoration">release-3.2.0</div><div id="tag5969" onclick="CopyToClipboard('tag5969');return false;" class="tag-decoration">release-v3</div><div id="tag3635" onclick="CopyToClipboard('tag3635');return false;" class="tag-decoration">release-v3.2</div><div id="tag13299" onclick="CopyToClipboard('tag13299');return false;" class="tag-decoration">release-v3.2.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/645f4c89beeb1180b181055b76e32192ab76b10f" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/25926006207" target="_blank">2026-05-15 15:24:03</a></td></tr>
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
