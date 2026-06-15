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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10107" onclick="CopyToClipboard('tag10107');return false;" class="tag-decoration">release</div><div id="tag10384" onclick="CopyToClipboard('tag10384');return false;" class="tag-decoration">release-104fe7d</div><div id="tag3279" onclick="CopyToClipboard('tag3279');return false;" class="tag-decoration">release-0.24.2066</div><div id="tag15985" onclick="CopyToClipboard('tag15985');return false;" class="tag-decoration">release-v0</div><div id="tag20736" onclick="CopyToClipboard('tag20736');return false;" class="tag-decoration">release-v0.24</div><div id="tag28501" onclick="CopyToClipboard('tag28501');return false;" class="tag-decoration">release-v0.24.2066</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/104fe7d8633c20911840c6ff292b426c75e82fc1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27494453599" target="_blank">2026-06-14 09:20:20</a></td></tr>
<tr><td><div id="tag14280" onclick="CopyToClipboard('tag14280');return false;" class="tag-decoration">testing</div><div id="tag11286" onclick="CopyToClipboard('tag11286');return false;" class="tag-decoration">testing-3d798a4</div><div id="tag2499" onclick="CopyToClipboard('tag2499');return false;" class="tag-decoration">testing-0.24.2067</div><div id="tag25189" onclick="CopyToClipboard('tag25189');return false;" class="tag-decoration">testing-v0</div><div id="tag21219" onclick="CopyToClipboard('tag21219');return false;" class="tag-decoration">testing-v0.24</div><div id="tag13196" onclick="CopyToClipboard('tag13196');return false;" class="tag-decoration">testing-v0.24.2067</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/3d798a44570c6a196f74133aa14d98d805a207d0" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27535015996" target="_blank">2026-06-15 08:52:22</a></td></tr>
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
