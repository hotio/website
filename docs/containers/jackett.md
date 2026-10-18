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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8244" onclick="CopyToClipboard('tag8244');return false;" class="tag-decoration">release</div><div id="tag26272" onclick="CopyToClipboard('tag26272');return false;" class="tag-decoration">release-bd2f5f9</div><div id="tag8228" onclick="CopyToClipboard('tag8228');return false;" class="tag-decoration">release-0.24.2867</div><div id="tag13242" onclick="CopyToClipboard('tag13242');return false;" class="tag-decoration">release-v0</div><div id="tag7434" onclick="CopyToClipboard('tag7434');return false;" class="tag-decoration">release-v0.24</div><div id="tag26193" onclick="CopyToClipboard('tag26193');return false;" class="tag-decoration">release-v0.24.2867</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/bd2f5f979a44239017301571eda775914b3dd220" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/39108276042" target="_blank">2026-10-18 07:35:59</a></td></tr>
<tr><td><div id="tag28975" onclick="CopyToClipboard('tag28975');return false;" class="tag-decoration">testing</div><div id="tag9814" onclick="CopyToClipboard('tag9814');return false;" class="tag-decoration">testing-e52a102</div><div id="tag8657" onclick="CopyToClipboard('tag8657');return false;" class="tag-decoration">testing-0.24.2867</div><div id="tag3091" onclick="CopyToClipboard('tag3091');return false;" class="tag-decoration">testing-v0</div><div id="tag5546" onclick="CopyToClipboard('tag5546');return false;" class="tag-decoration">testing-v0.24</div><div id="tag15240" onclick="CopyToClipboard('tag15240');return false;" class="tag-decoration">testing-v0.24.2867</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/e52a1029ab8d273fe8ed72917ba653e87d9bce17" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/39126773984" target="_blank">2026-10-18 12:19:01</a></td></tr>
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
