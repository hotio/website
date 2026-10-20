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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31074" onclick="CopyToClipboard('tag31074');return false;" class="tag-decoration">release</div><div id="tag32236" onclick="CopyToClipboard('tag32236');return false;" class="tag-decoration">release-b0885d3</div><div id="tag16109" onclick="CopyToClipboard('tag16109');return false;" class="tag-decoration">release-0.24.2884</div><div id="tag18006" onclick="CopyToClipboard('tag18006');return false;" class="tag-decoration">release-v0</div><div id="tag22153" onclick="CopyToClipboard('tag22153');return false;" class="tag-decoration">release-v0.24</div><div id="tag13350" onclick="CopyToClipboard('tag13350');return false;" class="tag-decoration">release-v0.24.2884</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/b0885d348bf29d59395614dc21e88785ae6df81d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/39383180500" target="_blank">2026-10-20 06:54:49</a></td></tr>
<tr><td><div id="tag4681" onclick="CopyToClipboard('tag4681');return false;" class="tag-decoration">testing</div><div id="tag311" onclick="CopyToClipboard('tag311');return false;" class="tag-decoration">testing-3a6bd82</div><div id="tag424" onclick="CopyToClipboard('tag424');return false;" class="tag-decoration">testing-0.24.2884</div><div id="tag2395" onclick="CopyToClipboard('tag2395');return false;" class="tag-decoration">testing-v0</div><div id="tag27633" onclick="CopyToClipboard('tag27633');return false;" class="tag-decoration">testing-v0.24</div><div id="tag2253" onclick="CopyToClipboard('tag2253');return false;" class="tag-decoration">testing-v0.24.2884</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/3a6bd829bf5da76d2e89a82abc2ea193e26f6f09" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/39497156091" target="_blank">2026-10-20 21:02:53</a></td></tr>
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
