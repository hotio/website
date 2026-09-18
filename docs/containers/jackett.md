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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12622" onclick="CopyToClipboard('tag12622');return false;" class="tag-decoration">release</div><div id="tag32686" onclick="CopyToClipboard('tag32686');return false;" class="tag-decoration">release-df440d9</div><div id="tag6054" onclick="CopyToClipboard('tag6054');return false;" class="tag-decoration">release-0.24.2605</div><div id="tag6905" onclick="CopyToClipboard('tag6905');return false;" class="tag-decoration">release-v0</div><div id="tag25566" onclick="CopyToClipboard('tag25566');return false;" class="tag-decoration">release-v0.24</div><div id="tag27581" onclick="CopyToClipboard('tag27581');return false;" class="tag-decoration">release-v0.24.2605</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/df440d96d81644ca3968ade4d983a962ba1439f1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35299319896" target="_blank">2026-09-18 02:26:16</a></td></tr>
<tr><td><div id="tag132" onclick="CopyToClipboard('tag132');return false;" class="tag-decoration">testing</div><div id="tag10820" onclick="CopyToClipboard('tag10820');return false;" class="tag-decoration">testing-4d25283</div><div id="tag15035" onclick="CopyToClipboard('tag15035');return false;" class="tag-decoration">testing-0.24.2605</div><div id="tag10246" onclick="CopyToClipboard('tag10246');return false;" class="tag-decoration">testing-v0</div><div id="tag8060" onclick="CopyToClipboard('tag8060');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22895" onclick="CopyToClipboard('tag22895');return false;" class="tag-decoration">testing-v0.24.2605</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/4d25283b840b93738f6019df23125990f87f2ef7" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/35299324725" target="_blank">2026-09-18 02:26:21</a></td></tr>
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
