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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18463" onclick="CopyToClipboard('tag18463');return false;" class="tag-decoration">release</div><div id="tag23765" onclick="CopyToClipboard('tag23765');return false;" class="tag-decoration">release-f9484de</div><div id="tag25933" onclick="CopyToClipboard('tag25933');return false;" class="tag-decoration">release-0.24.1147</div><div id="tag24138" onclick="CopyToClipboard('tag24138');return false;" class="tag-decoration">release-v0</div><div id="tag16448" onclick="CopyToClipboard('tag16448');return false;" class="tag-decoration">release-v0.24</div><div id="tag22575" onclick="CopyToClipboard('tag22575');return false;" class="tag-decoration">release-v0.24.1147</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/f9484dee5d14c526144146459dac2b070c115b22" target="_blank">Version update: 0.24.1140 => 0.24.1147</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22130144735" target="_blank">2026-02-18 07:07:42</a></td></tr>
<tr><td><div id="tag23603" onclick="CopyToClipboard('tag23603');return false;" class="tag-decoration">testing</div><div id="tag24904" onclick="CopyToClipboard('tag24904');return false;" class="tag-decoration">testing-e2730db</div><div id="tag22057" onclick="CopyToClipboard('tag22057');return false;" class="tag-decoration">testing-0.24.1157</div><div id="tag1060" onclick="CopyToClipboard('tag1060');return false;" class="tag-decoration">testing-v0</div><div id="tag123" onclick="CopyToClipboard('tag123');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22632" onclick="CopyToClipboard('tag22632');return false;" class="tag-decoration">testing-v0.24.1157</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/e2730dbab2f663bde6223c64bccb6a844d50e47f" target="_blank">Version update: 0.24.1147 => 0.24.1157</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22172023167" target="_blank">2026-02-19 07:06:36</a></td></tr>
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
