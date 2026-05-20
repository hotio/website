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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6051" onclick="CopyToClipboard('tag6051');return false;" class="tag-decoration">release</div><div id="tag8453" onclick="CopyToClipboard('tag8453');return false;" class="tag-decoration">release-80bafac</div><div id="tag22797" onclick="CopyToClipboard('tag22797');return false;" class="tag-decoration">release-0.24.1905</div><div id="tag23829" onclick="CopyToClipboard('tag23829');return false;" class="tag-decoration">release-v0</div><div id="tag15168" onclick="CopyToClipboard('tag15168');return false;" class="tag-decoration">release-v0.24</div><div id="tag4909" onclick="CopyToClipboard('tag4909');return false;" class="tag-decoration">release-v0.24.1905</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/80bafac9a97d537f1d5d7f50a778c05293f7d4b4" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26146074093" target="_blank">2026-05-20 06:42:26</a></td></tr>
<tr><td><div id="tag11575" onclick="CopyToClipboard('tag11575');return false;" class="tag-decoration">testing</div><div id="tag8054" onclick="CopyToClipboard('tag8054');return false;" class="tag-decoration">testing-80dcd42</div><div id="tag7397" onclick="CopyToClipboard('tag7397');return false;" class="tag-decoration">testing-0.24.1905</div><div id="tag19175" onclick="CopyToClipboard('tag19175');return false;" class="tag-decoration">testing-v0</div><div id="tag31328" onclick="CopyToClipboard('tag31328');return false;" class="tag-decoration">testing-v0.24</div><div id="tag12864" onclick="CopyToClipboard('tag12864');return false;" class="tag-decoration">testing-v0.24.1905</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/80dcd427b9526d94c17639d109d9a55393a7eecf" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/26146077639" target="_blank">2026-05-20 06:42:32</a></td></tr>
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
