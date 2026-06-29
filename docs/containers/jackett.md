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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag18949" onclick="CopyToClipboard('tag18949');return false;" class="tag-decoration">release</div><div id="tag4380" onclick="CopyToClipboard('tag4380');return false;" class="tag-decoration">release-5571d3a</div><div id="tag1420" onclick="CopyToClipboard('tag1420');return false;" class="tag-decoration">release-0.24.2140</div><div id="tag12175" onclick="CopyToClipboard('tag12175');return false;" class="tag-decoration">release-v0</div><div id="tag32248" onclick="CopyToClipboard('tag32248');return false;" class="tag-decoration">release-v0.24</div><div id="tag28961" onclick="CopyToClipboard('tag28961');return false;" class="tag-decoration">release-v0.24.2140</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/5571d3a39a06df136675ea57c9a55f1eebd16dd8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28390691109" target="_blank">2026-06-29 17:29:30</a></td></tr>
<tr><td><div id="tag13285" onclick="CopyToClipboard('tag13285');return false;" class="tag-decoration">testing</div><div id="tag32146" onclick="CopyToClipboard('tag32146');return false;" class="tag-decoration">testing-d9a318a</div><div id="tag1254" onclick="CopyToClipboard('tag1254');return false;" class="tag-decoration">testing-0.24.2140</div><div id="tag20841" onclick="CopyToClipboard('tag20841');return false;" class="tag-decoration">testing-v0</div><div id="tag4825" onclick="CopyToClipboard('tag4825');return false;" class="tag-decoration">testing-v0.24</div><div id="tag30586" onclick="CopyToClipboard('tag30586');return false;" class="tag-decoration">testing-v0.24.2140</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/d9a318a0234482359b3491031e2abd598b9a3590" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28390687657" target="_blank">2026-06-29 17:29:26</a></td></tr>
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
