---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7823" onclick="CopyToClipboard('tag7823');return false;" class="tag-decoration">release</div><div id="tag30466" onclick="CopyToClipboard('tag30466');return false;" class="tag-decoration">release-5096341</div><div id="tag8380" onclick="CopyToClipboard('tag8380');return false;" class="tag-decoration">release-0.24.2216</div><div id="tag9481" onclick="CopyToClipboard('tag9481');return false;" class="tag-decoration">release-v0</div><div id="tag29833" onclick="CopyToClipboard('tag29833');return false;" class="tag-decoration">release-v0.24</div><div id="tag32167" onclick="CopyToClipboard('tag32167');return false;" class="tag-decoration">release-v0.24.2216</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/50963419ad1e47a93456d0286ff4b02b73330513" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29360492099" target="_blank">2026-07-14 19:05:32</a></td></tr>
<tr><td><div id="tag22253" onclick="CopyToClipboard('tag22253');return false;" class="tag-decoration">testing</div><div id="tag25941" onclick="CopyToClipboard('tag25941');return false;" class="tag-decoration">testing-c07d935</div><div id="tag20207" onclick="CopyToClipboard('tag20207');return false;" class="tag-decoration">testing-0.24.2216</div><div id="tag24406" onclick="CopyToClipboard('tag24406');return false;" class="tag-decoration">testing-v0</div><div id="tag7824" onclick="CopyToClipboard('tag7824');return false;" class="tag-decoration">testing-v0.24</div><div id="tag18367" onclick="CopyToClipboard('tag18367');return false;" class="tag-decoration">testing-v0.24.2216</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c07d935df391ece882e2ccd69411b759776e3716" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/29360492268" target="_blank">2026-07-14 19:05:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
