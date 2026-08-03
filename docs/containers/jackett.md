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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag27480" onclick="CopyToClipboard('tag27480');return false;" class="tag-decoration">release</div><div id="tag11772" onclick="CopyToClipboard('tag11772');return false;" class="tag-decoration">release-4e4bdbf</div><div id="tag20535" onclick="CopyToClipboard('tag20535');return false;" class="tag-decoration">release-0.24.2315</div><div id="tag10310" onclick="CopyToClipboard('tag10310');return false;" class="tag-decoration">release-v0</div><div id="tag4406" onclick="CopyToClipboard('tag4406');return false;" class="tag-decoration">release-v0.24</div><div id="tag26386" onclick="CopyToClipboard('tag26386');return false;" class="tag-decoration">release-v0.24.2315</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/4e4bdbf666bdac3cdef31eb64e6c6b4c8d93c516" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30739181751" target="_blank">2026-08-02 08:08:12</a></td></tr>
<tr><td><div id="tag31323" onclick="CopyToClipboard('tag31323');return false;" class="tag-decoration">testing</div><div id="tag14475" onclick="CopyToClipboard('tag14475');return false;" class="tag-decoration">testing-53cf209</div><div id="tag20638" onclick="CopyToClipboard('tag20638');return false;" class="tag-decoration">testing-0.24.2323</div><div id="tag24844" onclick="CopyToClipboard('tag24844');return false;" class="tag-decoration">testing-v0</div><div id="tag31814" onclick="CopyToClipboard('tag31814');return false;" class="tag-decoration">testing-v0.24</div><div id="tag11311" onclick="CopyToClipboard('tag11311');return false;" class="tag-decoration">testing-v0.24.2323</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/53cf209c9f4cead28227e4ebbf37805d019af312" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30789346654" target="_blank">2026-08-03 06:11:00</a></td></tr>
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
