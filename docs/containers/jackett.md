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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18020" onclick="CopyToClipboard('tag18020');return false;" class="tag-decoration">release</div><div id="tag14197" onclick="CopyToClipboard('tag14197');return false;" class="tag-decoration">release-d0ba6bb</div><div id="tag5425" onclick="CopyToClipboard('tag5425');return false;" class="tag-decoration">release-0.24.2277</div><div id="tag31120" onclick="CopyToClipboard('tag31120');return false;" class="tag-decoration">release-v0</div><div id="tag30543" onclick="CopyToClipboard('tag30543');return false;" class="tag-decoration">release-v0.24</div><div id="tag2569" onclick="CopyToClipboard('tag2569');return false;" class="tag-decoration">release-v0.24.2277</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/d0ba6bbc664fff7c4577df510d322190132f64b3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30242371754" target="_blank">2026-07-27 06:19:38</a></td></tr>
<tr><td><div id="tag17899" onclick="CopyToClipboard('tag17899');return false;" class="tag-decoration">testing</div><div id="tag2384" onclick="CopyToClipboard('tag2384');return false;" class="tag-decoration">testing-580c44d</div><div id="tag13609" onclick="CopyToClipboard('tag13609');return false;" class="tag-decoration">testing-0.24.2277</div><div id="tag13374" onclick="CopyToClipboard('tag13374');return false;" class="tag-decoration">testing-v0</div><div id="tag19283" onclick="CopyToClipboard('tag19283');return false;" class="tag-decoration">testing-v0.24</div><div id="tag28141" onclick="CopyToClipboard('tag28141');return false;" class="tag-decoration">testing-v0.24.2277</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/580c44d6a50501940aa58e2045e1d4bfe9531f5d" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/30242372021" target="_blank">2026-07-27 06:19:38</a></td></tr>
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
