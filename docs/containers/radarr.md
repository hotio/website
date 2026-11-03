---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag14837" onclick="CopyToClipboard('tag14837');return false;" class="tag-decoration">nightly</div><div id="tag15021" onclick="CopyToClipboard('tag15021');return false;" class="tag-decoration">nightly-c5d3e83</div><div id="tag258" onclick="CopyToClipboard('tag258');return false;" class="tag-decoration">nightly-7.0.1.10859</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/c5d3e83b42a1a65c998bec2fe5e81a97039cf5bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/41552798651" target="_blank">2026-11-03 00:25:50</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3439" onclick="CopyToClipboard('tag3439');return false;" class="tag-decoration">release</div><div id="tag5087" onclick="CopyToClipboard('tag5087');return false;" class="tag-decoration">release-acbd1c6</div><div id="tag20138" onclick="CopyToClipboard('tag20138');return false;" class="tag-decoration">release-6.4.4.10685</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/acbd1c602ac0ac17c1540a847c05454faaf16eb1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/41552791829" target="_blank">2026-11-03 00:25:47</a></td></tr>
<tr><td><div id="tag18967" onclick="CopyToClipboard('tag18967');return false;" class="tag-decoration">testing</div><div id="tag13272" onclick="CopyToClipboard('tag13272');return false;" class="tag-decoration">testing-e1d8c30</div><div id="tag7441" onclick="CopyToClipboard('tag7441');return false;" class="tag-decoration">testing-7.0.1.10859</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/e1d8c30436a6ab57321ee8ff63b1bf35fb543c4f" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/41552797675" target="_blank">2026-11-03 00:25:50</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="7878/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=7878/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
