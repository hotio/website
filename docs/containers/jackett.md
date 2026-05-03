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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6346" onclick="CopyToClipboard('tag6346');return false;" class="tag-decoration">release</div><div id="tag13738" onclick="CopyToClipboard('tag13738');return false;" class="tag-decoration">release-6e4effc</div><div id="tag22468" onclick="CopyToClipboard('tag22468');return false;" class="tag-decoration">release-0.24.1815</div><div id="tag11120" onclick="CopyToClipboard('tag11120');return false;" class="tag-decoration">release-v0</div><div id="tag4132" onclick="CopyToClipboard('tag4132');return false;" class="tag-decoration">release-v0.24</div><div id="tag24128" onclick="CopyToClipboard('tag24128');return false;" class="tag-decoration">release-v0.24.1815</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/6e4effcc9db3d1bd3522acb0325be582a1299692" target="_blank">Version update: 0.24.1813 => 0.24.1815</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25271782311" target="_blank">2026-05-03 06:17:17</a></td></tr>
<tr><td><div id="tag21668" onclick="CopyToClipboard('tag21668');return false;" class="tag-decoration">testing</div><div id="tag20159" onclick="CopyToClipboard('tag20159');return false;" class="tag-decoration">testing-178c023</div><div id="tag8346" onclick="CopyToClipboard('tag8346');return false;" class="tag-decoration">testing-0.24.1815</div><div id="tag16605" onclick="CopyToClipboard('tag16605');return false;" class="tag-decoration">testing-v0</div><div id="tag21410" onclick="CopyToClipboard('tag21410');return false;" class="tag-decoration">testing-v0.24</div><div id="tag4328" onclick="CopyToClipboard('tag4328');return false;" class="tag-decoration">testing-v0.24.1815</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/178c02333371f46d60f73387d209b47ce25c9f6f" target="_blank">Version update: 0.24.1813 => 0.24.1815</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25271783064" target="_blank">2026-05-03 06:17:21</a></td></tr>
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
