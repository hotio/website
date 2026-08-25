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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag30067" onclick="CopyToClipboard('tag30067');return false;" class="tag-decoration">release</div><div id="tag1504" onclick="CopyToClipboard('tag1504');return false;" class="tag-decoration">release-26b8233</div><div id="tag5485" onclick="CopyToClipboard('tag5485');return false;" class="tag-decoration">release-0.24.2467</div><div id="tag9113" onclick="CopyToClipboard('tag9113');return false;" class="tag-decoration">release-v0</div><div id="tag13674" onclick="CopyToClipboard('tag13674');return false;" class="tag-decoration">release-v0.24</div><div id="tag2291" onclick="CopyToClipboard('tag2291');return false;" class="tag-decoration">release-v0.24.2467</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/26b82332336570dc7abdb3c9c0006034842dc707" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32817337495" target="_blank">2026-08-25 06:31:19</a></td></tr>
<tr><td><div id="tag22620" onclick="CopyToClipboard('tag22620');return false;" class="tag-decoration">testing</div><div id="tag27136" onclick="CopyToClipboard('tag27136');return false;" class="tag-decoration">testing-41daf5e</div><div id="tag1389" onclick="CopyToClipboard('tag1389');return false;" class="tag-decoration">testing-0.24.2467</div><div id="tag2607" onclick="CopyToClipboard('tag2607');return false;" class="tag-decoration">testing-v0</div><div id="tag875" onclick="CopyToClipboard('tag875');return false;" class="tag-decoration">testing-v0.24</div><div id="tag21198" onclick="CopyToClipboard('tag21198');return false;" class="tag-decoration">testing-v0.24.2467</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/41daf5e87fadcb401026699a4048c48c4f016cf6" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/32817334878" target="_blank">2026-08-25 06:31:18</a></td></tr>
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
