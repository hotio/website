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
<tr><td><div id="tag8520" onclick="CopyToClipboard('tag8520');return false;" class="tag-decoration">nightly</div><div id="tag16210" onclick="CopyToClipboard('tag16210');return false;" class="tag-decoration">nightly-d80043b</div><div id="tag11628" onclick="CopyToClipboard('tag11628');return false;" class="tag-decoration">nightly-6f5a17735d383b110cca04326ecd536ad7675ed6</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/seerr/commit/d80043ba16d1322c1434abb35572286715afd62a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/34175283369" target="_blank">2026-09-08 01:02:02</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27203" onclick="CopyToClipboard('tag27203');return false;" class="tag-decoration">release</div><div id="tag13796" onclick="CopyToClipboard('tag13796');return false;" class="tag-decoration">release-3b2c475</div><div id="tag14501" onclick="CopyToClipboard('tag14501');return false;" class="tag-decoration">release-3.4.1</div><div id="tag7084" onclick="CopyToClipboard('tag7084');return false;" class="tag-decoration">release-v3</div><div id="tag18546" onclick="CopyToClipboard('tag18546');return false;" class="tag-decoration">release-v3.4</div><div id="tag13834" onclick="CopyToClipboard('tag13834');return false;" class="tag-decoration">release-v3.4.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/seerr/commit/3b2c47587d0638d2c4e6199ef0b103303c90591e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/seerr/actions/runs/33916821183" target="_blank">2026-09-04 20:33:27</a></td></tr>
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
