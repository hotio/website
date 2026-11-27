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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag788" onclick="CopyToClipboard('tag788');return false;" class="tag-decoration">release</div><div id="tag13018" onclick="CopyToClipboard('tag13018');return false;" class="tag-decoration">release-8c40443</div><div id="tag7310" onclick="CopyToClipboard('tag7310');return false;" class="tag-decoration">release-0.25.48</div><div id="tag26859" onclick="CopyToClipboard('tag26859');return false;" class="tag-decoration">release-v0</div><div id="tag21312" onclick="CopyToClipboard('tag21312');return false;" class="tag-decoration">release-v0.25</div><div id="tag24920" onclick="CopyToClipboard('tag24920');return false;" class="tag-decoration">release-v0.25.48</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/8c404433591a492406f6743615d3c2a1b9cdd580" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/46080451733" target="_blank">2026-11-27 23:05:05</a></td></tr>
<tr><td><div id="tag3800" onclick="CopyToClipboard('tag3800');return false;" class="tag-decoration">testing</div><div id="tag10237" onclick="CopyToClipboard('tag10237');return false;" class="tag-decoration">testing-b07f233</div><div id="tag4183" onclick="CopyToClipboard('tag4183');return false;" class="tag-decoration">testing-0.25.48</div><div id="tag4492" onclick="CopyToClipboard('tag4492');return false;" class="tag-decoration">testing-v0</div><div id="tag6273" onclick="CopyToClipboard('tag6273');return false;" class="tag-decoration">testing-v0.25</div><div id="tag10714" onclick="CopyToClipboard('tag10714');return false;" class="tag-decoration">testing-v0.25.48</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/b07f233dcfa31315750abec26eb1adfa2615006a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/46080457345" target="_blank">2026-11-27 23:05:08</a></td></tr>
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
