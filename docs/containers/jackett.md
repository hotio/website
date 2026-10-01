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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8237" onclick="CopyToClipboard('tag8237');return false;" class="tag-decoration">release</div><div id="tag26922" onclick="CopyToClipboard('tag26922');return false;" class="tag-decoration">release-8b28899</div><div id="tag12855" onclick="CopyToClipboard('tag12855');return false;" class="tag-decoration">release-0.24.2748</div><div id="tag30040" onclick="CopyToClipboard('tag30040');return false;" class="tag-decoration">release-v0</div><div id="tag8619" onclick="CopyToClipboard('tag8619');return false;" class="tag-decoration">release-v0.24</div><div id="tag31893" onclick="CopyToClipboard('tag31893');return false;" class="tag-decoration">release-v0.24.2748</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/8b28899040a8bebb362f053a9096d0fb2ff2b927" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/36826414020" target="_blank">2026-10-01 06:44:38</a></td></tr>
<tr><td><div id="tag15371" onclick="CopyToClipboard('tag15371');return false;" class="tag-decoration">testing</div><div id="tag12110" onclick="CopyToClipboard('tag12110');return false;" class="tag-decoration">testing-c3af587</div><div id="tag27687" onclick="CopyToClipboard('tag27687');return false;" class="tag-decoration">testing-0.24.2748</div><div id="tag892" onclick="CopyToClipboard('tag892');return false;" class="tag-decoration">testing-v0</div><div id="tag546" onclick="CopyToClipboard('tag546');return false;" class="tag-decoration">testing-v0.24</div><div id="tag1137" onclick="CopyToClipboard('tag1137');return false;" class="tag-decoration">testing-v0.24.2748</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c3af5873911195977f9b5aeb9f18dc0127abecf6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/36826409481" target="_blank">2026-10-01 06:44:36</a></td></tr>
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
