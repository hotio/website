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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8757" onclick="CopyToClipboard('tag8757');return false;" class="tag-decoration">release</div><div id="tag23127" onclick="CopyToClipboard('tag23127');return false;" class="tag-decoration">release-d5b9bbc</div><div id="tag8226" onclick="CopyToClipboard('tag8226');return false;" class="tag-decoration">release-0.24.2142</div><div id="tag298" onclick="CopyToClipboard('tag298');return false;" class="tag-decoration">release-v0</div><div id="tag30833" onclick="CopyToClipboard('tag30833');return false;" class="tag-decoration">release-v0.24</div><div id="tag12460" onclick="CopyToClipboard('tag12460');return false;" class="tag-decoration">release-v0.24.2142</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/d5b9bbc8670649ccbe02578272f3ce07388ea386" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28425901964" target="_blank">2026-06-30 06:50:15</a></td></tr>
<tr><td><div id="tag22829" onclick="CopyToClipboard('tag22829');return false;" class="tag-decoration">testing</div><div id="tag22630" onclick="CopyToClipboard('tag22630');return false;" class="tag-decoration">testing-aabcddf</div><div id="tag5511" onclick="CopyToClipboard('tag5511');return false;" class="tag-decoration">testing-0.24.2142</div><div id="tag26224" onclick="CopyToClipboard('tag26224');return false;" class="tag-decoration">testing-v0</div><div id="tag13987" onclick="CopyToClipboard('tag13987');return false;" class="tag-decoration">testing-v0.24</div><div id="tag22674" onclick="CopyToClipboard('tag22674');return false;" class="tag-decoration">testing-v0.24.2142</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/aabcddfc8945d0457012f7fb9d95858efcd64a76" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28425899281" target="_blank">2026-06-30 06:50:12</a></td></tr>
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
