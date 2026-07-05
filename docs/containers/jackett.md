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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23491" onclick="CopyToClipboard('tag23491');return false;" class="tag-decoration">release</div><div id="tag26130" onclick="CopyToClipboard('tag26130');return false;" class="tag-decoration">release-26646cd</div><div id="tag14380" onclick="CopyToClipboard('tag14380');return false;" class="tag-decoration">release-0.24.2177</div><div id="tag9963" onclick="CopyToClipboard('tag9963');return false;" class="tag-decoration">release-v0</div><div id="tag26621" onclick="CopyToClipboard('tag26621');return false;" class="tag-decoration">release-v0.24</div><div id="tag4863" onclick="CopyToClipboard('tag4863');return false;" class="tag-decoration">release-v0.24.2177</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/26646cdeedb0c2e86bdc460ea2bf19161c208491" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28732088456" target="_blank">2026-07-05 06:32:19</a></td></tr>
<tr><td><div id="tag19934" onclick="CopyToClipboard('tag19934');return false;" class="tag-decoration">testing</div><div id="tag4521" onclick="CopyToClipboard('tag4521');return false;" class="tag-decoration">testing-7b08e61</div><div id="tag17969" onclick="CopyToClipboard('tag17969');return false;" class="tag-decoration">testing-0.24.2177</div><div id="tag19355" onclick="CopyToClipboard('tag19355');return false;" class="tag-decoration">testing-v0</div><div id="tag364" onclick="CopyToClipboard('tag364');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9962" onclick="CopyToClipboard('tag9962');return false;" class="tag-decoration">testing-v0.24.2177</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/7b08e61c45c143d506ece934c3ac2350135ec8bc" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28732090127" target="_blank">2026-07-05 06:32:24</a></td></tr>
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
