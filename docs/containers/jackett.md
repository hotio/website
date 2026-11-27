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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9040" onclick="CopyToClipboard('tag9040');return false;" class="tag-decoration">release</div><div id="tag623" onclick="CopyToClipboard('tag623');return false;" class="tag-decoration">release-14a7b00</div><div id="tag13957" onclick="CopyToClipboard('tag13957');return false;" class="tag-decoration">release-0.25.48</div><div id="tag12902" onclick="CopyToClipboard('tag12902');return false;" class="tag-decoration">release-v0</div><div id="tag18085" onclick="CopyToClipboard('tag18085');return false;" class="tag-decoration">release-v0.25</div><div id="tag26609" onclick="CopyToClipboard('tag26609');return false;" class="tag-decoration">release-v0.25.48</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/14a7b00050f03c497f0167d8da604725daecd14a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/46016678283" target="_blank">2026-11-27 14:31:17</a></td></tr>
<tr><td><div id="tag21267" onclick="CopyToClipboard('tag21267');return false;" class="tag-decoration">testing</div><div id="tag14301" onclick="CopyToClipboard('tag14301');return false;" class="tag-decoration">testing-5e4db4a</div><div id="tag14378" onclick="CopyToClipboard('tag14378');return false;" class="tag-decoration">testing-0.25.48</div><div id="tag22540" onclick="CopyToClipboard('tag22540');return false;" class="tag-decoration">testing-v0</div><div id="tag13411" onclick="CopyToClipboard('tag13411');return false;" class="tag-decoration">testing-v0.25</div><div id="tag19379" onclick="CopyToClipboard('tag19379');return false;" class="tag-decoration">testing-v0.25.48</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/5e4db4abe9ea7fff78f26f4eb71380226276c476" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/46016675476" target="_blank">2026-11-27 14:31:16</a></td></tr>
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
