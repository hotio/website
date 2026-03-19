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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18623" onclick="CopyToClipboard('tag18623');return false;" class="tag-decoration">release</div><div id="tag5850" onclick="CopyToClipboard('tag5850');return false;" class="tag-decoration">release-4387c12</div><div id="tag21928" onclick="CopyToClipboard('tag21928');return false;" class="tag-decoration">release-0.24.1412</div><div id="tag20004" onclick="CopyToClipboard('tag20004');return false;" class="tag-decoration">release-v0</div><div id="tag31725" onclick="CopyToClipboard('tag31725');return false;" class="tag-decoration">release-v0.24</div><div id="tag30987" onclick="CopyToClipboard('tag30987');return false;" class="tag-decoration">release-v0.24.1412</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/4387c12cfd37f09117e1153c16f869773413559e" target="_blank">Version update: 0.24.1394 => 0.24.1412</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23282056256" target="_blank">2026-03-19 06:01:04</a></td></tr>
<tr><td><div id="tag12199" onclick="CopyToClipboard('tag12199');return false;" class="tag-decoration">testing</div><div id="tag23875" onclick="CopyToClipboard('tag23875');return false;" class="tag-decoration">testing-b12d896</div><div id="tag30081" onclick="CopyToClipboard('tag30081');return false;" class="tag-decoration">testing-0.24.1394</div><div id="tag14204" onclick="CopyToClipboard('tag14204');return false;" class="tag-decoration">testing-v0</div><div id="tag20620" onclick="CopyToClipboard('tag20620');return false;" class="tag-decoration">testing-v0.24</div><div id="tag3022" onclick="CopyToClipboard('tag3022');return false;" class="tag-decoration">testing-v0.24.1394</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/b12d896d2e20f320ace15ba45488335ace11c7c0" target="_blank">Version update: 0.24.1392 => 0.24.1394</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23231743745" target="_blank">2026-03-18 06:14:28</a></td></tr>
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
