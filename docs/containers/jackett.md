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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag20420" onclick="CopyToClipboard('tag20420');return false;" class="tag-decoration">release</div><div id="tag19135" onclick="CopyToClipboard('tag19135');return false;" class="tag-decoration">release-5571d3a</div><div id="tag31532" onclick="CopyToClipboard('tag31532');return false;" class="tag-decoration">release-0.24.2140</div><div id="tag28170" onclick="CopyToClipboard('tag28170');return false;" class="tag-decoration">release-v0</div><div id="tag4075" onclick="CopyToClipboard('tag4075');return false;" class="tag-decoration">release-v0.24</div><div id="tag3332" onclick="CopyToClipboard('tag3332');return false;" class="tag-decoration">release-v0.24.2140</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/5571d3a39a06df136675ea57c9a55f1eebd16dd8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28390691109" target="_blank">2026-06-29 17:29:30</a></td></tr>
<tr><td><div id="tag7941" onclick="CopyToClipboard('tag7941');return false;" class="tag-decoration">testing</div><div id="tag14700" onclick="CopyToClipboard('tag14700');return false;" class="tag-decoration">testing-aabcddf</div><div id="tag16991" onclick="CopyToClipboard('tag16991');return false;" class="tag-decoration">testing-0.24.2142</div><div id="tag5381" onclick="CopyToClipboard('tag5381');return false;" class="tag-decoration">testing-v0</div><div id="tag17014" onclick="CopyToClipboard('tag17014');return false;" class="tag-decoration">testing-v0.24</div><div id="tag15809" onclick="CopyToClipboard('tag15809');return false;" class="tag-decoration">testing-v0.24.2142</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/aabcddfc8945d0457012f7fb9d95858efcd64a76" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28425899281" target="_blank">2026-06-30 06:50:12</a></td></tr>
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
