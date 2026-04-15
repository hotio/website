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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag14518" onclick="CopyToClipboard('tag14518');return false;" class="tag-decoration">release</div><div id="tag27742" onclick="CopyToClipboard('tag27742');return false;" class="tag-decoration">release-395d1e1</div><div id="tag23623" onclick="CopyToClipboard('tag23623');return false;" class="tag-decoration">release-0.24.1591</div><div id="tag19529" onclick="CopyToClipboard('tag19529');return false;" class="tag-decoration">release-v0</div><div id="tag8625" onclick="CopyToClipboard('tag8625');return false;" class="tag-decoration">release-v0.24</div><div id="tag23959" onclick="CopyToClipboard('tag23959');return false;" class="tag-decoration">release-v0.24.1591</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/395d1e15a148c959e95ca66a818f7f4eaed6dbed" target="_blank">Version update: 0.24.1577 => 0.24.1591</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24387644322" target="_blank">2026-04-14 07:55:12</a></td></tr>
<tr><td><div id="tag17599" onclick="CopyToClipboard('tag17599');return false;" class="tag-decoration">testing</div><div id="tag31987" onclick="CopyToClipboard('tag31987');return false;" class="tag-decoration">testing-bfafc8f</div><div id="tag26852" onclick="CopyToClipboard('tag26852');return false;" class="tag-decoration">testing-0.24.1601</div><div id="tag7244" onclick="CopyToClipboard('tag7244');return false;" class="tag-decoration">testing-v0</div><div id="tag19197" onclick="CopyToClipboard('tag19197');return false;" class="tag-decoration">testing-v0.24</div><div id="tag10020" onclick="CopyToClipboard('tag10020');return false;" class="tag-decoration">testing-v0.24.1601</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/bfafc8f6e07d61f66270beb48dccfda4ea0c0ffe" target="_blank">Version update: 0.24.1591 => 0.24.1601</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/24443085254" target="_blank">2026-04-15 07:56:08</a></td></tr>
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
