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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21355" onclick="CopyToClipboard('tag21355');return false;" class="tag-decoration">release</div><div id="tag11267" onclick="CopyToClipboard('tag11267');return false;" class="tag-decoration">release-4759236</div><div id="tag31788" onclick="CopyToClipboard('tag31788');return false;" class="tag-decoration">release-0.24.2934</div><div id="tag26302" onclick="CopyToClipboard('tag26302');return false;" class="tag-decoration">release-v0</div><div id="tag15333" onclick="CopyToClipboard('tag15333');return false;" class="tag-decoration">release-v0.24</div><div id="tag18388" onclick="CopyToClipboard('tag18388');return false;" class="tag-decoration">release-v0.24.2934</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/47592367e1f7bc2b60924b70ffacda0e5635361c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40515346358" target="_blank">2026-10-27 13:48:32</a></td></tr>
<tr><td><div id="tag12833" onclick="CopyToClipboard('tag12833');return false;" class="tag-decoration">testing</div><div id="tag19168" onclick="CopyToClipboard('tag19168');return false;" class="tag-decoration">testing-4f90fd6</div><div id="tag17" onclick="CopyToClipboard('tag17');return false;" class="tag-decoration">testing-0.24.2932</div><div id="tag14970" onclick="CopyToClipboard('tag14970');return false;" class="tag-decoration">testing-v0</div><div id="tag17806" onclick="CopyToClipboard('tag17806');return false;" class="tag-decoration">testing-v0.24</div><div id="tag19378" onclick="CopyToClipboard('tag19378');return false;" class="tag-decoration">testing-v0.24.2932</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/4f90fd6d0a7a3219c1a712cc540d2e1ad2d92da9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/40465063538" target="_blank">2026-10-27 07:05:54</a></td></tr>
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
